import Command, { ICommandInst } from "./command";
import fs from "fs";
import path from "path";
// Command invoker
export default class LoggerInvoker {
  private static singleton: LoggerInvoker;
  private commands: Map<string, Command>;
  private constructor() {
    this.commands = new Map();
  }
  // Retorna um comando do hash de comandos
  private getCommand(commandName: string): Command {
    const command = this.commands.get(commandName);
    if (!command) {
      throw new Error(`Command ${commandName} not found`);
    }
    return command;
  }

  // Registra todos os comandos
  private async registerCommands(): Promise<void> {
    // Encontra todos os arquivos que terminam com .ts dentro da pasta commands
    const commandsFilesList = fs
      .readdirSync(path.join(__dirname, "commands"))
      .filter((file) => file.endsWith(".js"));
    const commandsList = [] as [string, Command][];
    
      // itera sobre todos os arquivos encontrados
    for (const commandFile of commandsFilesList) {
      // Importa o arquivo
      const current = (await import(`./commands/${commandFile}`)) as any;
      // Pegar a primeira propriedade do objeto, o importado por default
      const commandClass = Object.values(current)[0];
      // Verifica se o comando é uma classe
      if (typeof commandClass !== "function") {
        return;
      }
      // verifica se o comando é uma classe que estende Command
      if (commandClass.prototype.execute) {
        // Adiciona ao hash de comandos
        try {
          const newCommandClass = commandClass as ICommandInst<any>;
          const newCommand = new newCommandClass();
          commandsList.push([commandClass.name, newCommand]);
        } catch (error) {
          console.error("Error registering command", commandClass.name);
          throw error;
        }
      }
    }
    this.commands = new Map(commandsList);
  }

  public static async getInstance(): Promise<LoggerInvoker> {
    if (!LoggerInvoker.singleton) {
      LoggerInvoker.singleton = new LoggerInvoker();
      await LoggerInvoker.singleton.registerCommands();
    }
    return LoggerInvoker.singleton;
  }

  // Retorna uma lista com todos os comandos registrados
  public listCommands(): string[] {
    return Array.from(this.commands.keys());
  }

  // Executa um comando
  public executeCommand(commandName: string, ...args: any[]): void {
    const command = this.getCommand(commandName);
    command.execute(...args);
  }
}

import LoggerInvoker from "./invoker";

const main = async () => {

console.log("Running command pattern");
console.log("Esse é um invoker que registra comandos e e capaz de executá-los");
console.log("Os comandos são registrados automaticamente");
console.log("Os comandos são executados através do invoker");
console.log("O invoker é um singleton");
console.log("O Fiz um mini sistema de log para exemplificar");

// Singleton
const invoker = await LoggerInvoker.getInstance();

console.log(`O logger possui os seguintes commando`,invoker.listCommands()); // 'AsyncHello', 'ErroLogger', 'Hello', 'InfoLogger', 'WarnLogger'

// Executa o comando
invoker.executeCommand("InfoLogger", "Hello World");
invoker.executeCommand("ErrorLogger", "Hello World");
invoker.executeCommand("WarnLogger", "Hello World");

try {
    // Executa um comando que não existe
    invoker.executeCommand("Hello", "Hello World");
} catch (error) {
    console.log("O comando Hello não existe");
}



}

main();


// Command é uma classe abstrata que define o método execute
export default abstract class Command {
    public abstract execute(...args: any[]): Promise<any> | any; // Os comandos podem retornar uma Promise ou um valor qualquer
    
}

interface ICommandInst<T> {
    new (...args: any[]): T;
}

export { Command , ICommandInst }

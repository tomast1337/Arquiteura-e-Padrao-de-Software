import Command from "../command";
export default class ErrorLogger extends Command {
  public execute(message:string): void {
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    console.error(`[ERROR][${now}] ${message}`);
  }
}

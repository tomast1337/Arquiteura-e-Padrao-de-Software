import Command from "../command";
export default class InfoLogger extends Command {
  public execute(message:string): void {
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    console.info(`[INFO][${now}] ${message}`);
  }
}

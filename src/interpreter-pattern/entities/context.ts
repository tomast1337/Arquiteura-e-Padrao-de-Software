export class Context {
  private _input: string = "";
  private _output: string[] = [];

  constructor(input: string) {
    this._input = input;
  }

  get input(): string {
    return this._input;
  }

  set input(value: string) {
    this._input = value;
  }

  get output(): string[] {
    return this._output;
  }

  addOutput(value: string): void {
    this._output.push(value);
  }
}

import { API } from "./api";

class APIImpl implements API {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getData(): void {
    console.log(`Fetching data from API with key ${this.apiKey}`);
  }
}

export { APIImpl };

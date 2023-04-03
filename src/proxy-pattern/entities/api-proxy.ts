import { API } from "./api";
import { APIImpl } from "./real-api";

class APIProxy implements API {
  private realAPI: APIImpl;
  private rateLimit: number;
  private lastAccessTime: Date;

  constructor(apiKey: string) {
    this.realAPI = new APIImpl(apiKey);
    this.rateLimit = 5; // 5 requests per minute
    this.lastAccessTime = new Date();
  }

  getData(): void {
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - this.lastAccessTime.getTime();
    const timeElapsed = Math.ceil(timeDiff / 1000); // convert milliseconds to seconds
    const requestsRemaining = this.rateLimit - timeElapsed;
    if (requestsRemaining < 0) {
      console.log(
        `API rate limit exceeded. Try again in ${Math.abs(
          requestsRemaining
        )} seconds.`
      );
      return;
    }
    console.log(`API rate limit OK. Fetching data...`);
    this.realAPI.getData();
    this.lastAccessTime = new Date();
  }
}

export { APIProxy };

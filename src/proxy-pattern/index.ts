import { APIProxy } from "./entities/api-proxy";

const main = () => {
  const apiKey = "#9H$934GV9Mq%#xZjUOmdb2Zl78a6vzI";
  const api = new APIProxy(apiKey);

  Array(10).fill(0).forEach(() => api.getData());
};

main();

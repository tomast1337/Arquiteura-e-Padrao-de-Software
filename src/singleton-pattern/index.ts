import { Singleton } from "./singleton-class";

const singleton1 = Singleton.getInstance(); // O singleton é criado aqui por uma função estática
const singleton2 = Singleton.getInstance(); // Essa variável aponta para o mesmo objeto que singleton1 aponta
if (singleton1 === singleton2) {
  console.log("singleton1 and singleton2 are the same instance");
}

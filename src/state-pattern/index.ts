import CarnivalRide from "./entities/carnival-ride";

const main = () => {
  // Exemplo de uso
  const ride = new CarnivalRide();

  ride.start(); // Iniciando o brinquedo...
  ride.start(); // O brinquedo já está em execução.

  ride.stop(); // Parando o brinquedo...

  ride.start(); // Iniciando o brinquedo...
  ride.abort(); // Abortando o brinquedo...

  ride.start(); // Não é possível iniciar o brinquedo quando ele foi abortado.
};

main();

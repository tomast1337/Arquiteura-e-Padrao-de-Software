export class Singleton {
    private static instance: Singleton;
  
    private constructor() { 
        // O construtor é privado, então não é possível instanciar a classe diretamente
    }
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  
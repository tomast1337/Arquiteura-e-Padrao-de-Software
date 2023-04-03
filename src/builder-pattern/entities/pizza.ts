class Pizza {
  private dough: string = "";
  private sauce: string = "";
  private toppings: string[] = [];

  setDough(dough: string): Pizza {
    this.dough = dough;
    return this;
  }

  setSauce(sauce: string): Pizza {
    this.sauce = sauce;
    return this;
  }

  setToppings(toppings: string[]): Pizza {
    this.toppings = toppings;
    return this;
  }

  getDescription(): string {
    return `Pizza com ${this.dough} massa, ${
      this.sauce
    } molho e os seguintes ingredientes: ${this.toppings.join(", ")}`;
  }

  toString(): string {
    return this.getDescription();
  }
}

export { Pizza };

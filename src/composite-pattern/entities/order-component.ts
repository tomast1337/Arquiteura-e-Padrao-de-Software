import { Component } from "./component";

export class OrderComponent implements Component {
  private components: Component[] = [];

  addComponent(component: Component) {
    this.components.push(component);
  }

  removeComponent(component: Component) {
    const index = this.components.indexOf(component);
    this.components.splice(index, 1);
  }

  getPrice(): number {
    let totalPrice = 0;
    this.components.forEach((component) => {
      totalPrice += component.getPrice();
    });
    return totalPrice;
  }

  itemList(): string[] {
    let itemList = [] as string[];
    this.components.forEach((component) => {
      itemList = itemList.concat(component.itemList());
    });
    return itemList;
  }
}

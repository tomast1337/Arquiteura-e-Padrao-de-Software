import { Dao } from "./abstractDao";
import DataBase, { Product } from "../DataBase";

class UsersDao implements Dao<Product> {
  tableName: "products" = "products";
  dataBase: DataBase = DataBase.getInstance();
  insert(object: Product): void {
    const table = this.dataBase.getTable(this.tableName) as Product[];
    if (table.length === 0) {
      object.id = 1;
      table.push(object);
      return;
    }
    const lastId = table[table.length - 1].id;
    object.id = lastId + 1;
    table.push(object);
  }
  update(object: Product): void {
    const index = this.dataBase
      .getTable(this.tableName)
      .findIndex((product) => product.id === object.id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    this.dataBase.getTable(this.tableName)[index] = object;
  }
  delete(id: number): void {
    const index = this.dataBase
      .getTable(this.tableName)
      .findIndex((product) => product.id === id);
    this.dataBase.getTable(this.tableName).splice(index, 1);
  }
  find(id: number): Product {
    const table = this.dataBase.getTable(this.tableName) as Product[];
    const product = table.find((product) => product.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
  findAll(): Product[] {
    return this.dataBase.getTable(this.tableName) as Product[];
  }
}

export default UsersDao;
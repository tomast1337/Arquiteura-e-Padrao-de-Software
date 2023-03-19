import { Dao } from "./abstractDao";
import DataBase, { UserOrder } from "../DataBase";

class UsersDao implements Dao<UserOrder> {
  tableName: "orders" = "orders";
  dataBase: DataBase = DataBase.getInstance();
  insert(object: UserOrder): void {
    const table = this.dataBase.getTable(this.tableName) as UserOrder[];
    if (table.length === 0) {
      object.id = 1;
      table.push(object);
      return;
    }
    const lastId = table[table.length - 1].id;
    object.id = lastId + 1;
    table.push(object);
  }
  update(object: UserOrder): void {
    // verificando se o id do objeto passado existe
    const index = this.dataBase
      .getTable(this.tableName)
      .findIndex((order) => order.id === object.id);
    // se não existir, lança um erro
    if (index === -1) {
      throw new Error("Order not found");
    }
    // se existir, atualiza o objeto
    this.dataBase.getTable(this.tableName)[index] = object;
  }
  delete(id: number): void {
    const index = this.dataBase
      .getTable(this.tableName)
      .findIndex((order) => order.id === id);
    this.dataBase.getTable(this.tableName).splice(index, 1);
  }
  find(id: number): UserOrder {
    const table = this.dataBase.getTable(this.tableName) as UserOrder[];
    const order = table.find((order) => order.id === id);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }
  findAll(): UserOrder[] {
    return this.dataBase.getTable(this.tableName) as UserOrder[];
  }
}

export default UsersDao;

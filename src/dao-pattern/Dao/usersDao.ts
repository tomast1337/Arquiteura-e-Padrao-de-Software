import { Dao } from "./abstractDao";
import DataBase, { User } from "../DataBase";

class UsersDao implements Dao<User> {
  tableName: "users" = "users";
  dataBase: DataBase = DataBase.getInstance();
  insert(object: User): void {
    const table = this.dataBase.getTable(this.tableName) as User[];
    if (table.length === 0) {
      object.id = 1;
      table.push(object);
      return;
    }
    const lastId = table[table.length - 1].id;
    object.id = lastId + 1;
    table.push(object);
  }
  update(object: User): void {
    const index = this.dataBase
        .getTable(this.tableName)
        .findIndex((user) => user.id === object.id);
    if (index === -1) {
        throw new Error("User not found");
    }
    this.dataBase.getTable(this.tableName)[index] = object;

  }
  delete(id: number): void {
    const index = this.dataBase
      .getTable(this.tableName)
      .findIndex((user) => user.id === id);
    this.dataBase.getTable(this.tableName).splice(index, 1);
  }
  find(id: number): User {
    const table = this.dataBase.getTable(this.tableName) as User[];
    const user = table.find((user) => user.id === id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
  findAll(): User[] {
    return this.dataBase.getTable(this.tableName) as User[];
  }
}

export default UsersDao;

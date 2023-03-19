type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type UserOrder = {
  id: number;
  userId: number;
  productIds: number[];
};

type TableNames = "users" | "products" | "orders";

class DataBase {
  private users: User[] = [];
  private products: Product[] = [];
  private orders: UserOrder[] = [];

  static instance: DataBase;

  private constructor() {}

  static getInstance(): DataBase {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }

  getTable(tableName: TableNames): User[] | Product[] | UserOrder[] {
    switch (tableName) {
      case "users":
        return this.users;
      case "products":
        return this.products;
      case "orders":
        return this.orders;
      default:
        throw new Error("Table not found");
    }
  }
}

export default DataBase;
export { User, Product, UserOrder };

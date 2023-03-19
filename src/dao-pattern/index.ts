import UsersDao from "./Dao/usersDao";
import ProductsDao from "./Dao/productsDao";
import OrdersDao from "./Dao/ordersDao";
import { User, UserOrder, Product } from "./DataBase";

const usersDao = new UsersDao();
const productsDao = new ProductsDao();
const ordersDao = new OrdersDao();

// create 10 products
Array.from({ length: 10 }).forEach((_, index) => {
  productsDao.insert({
    id: index,
    name: `Product ${index}`,
    price: Math.random() * 100,
  });
});

// create 10 users
Array.from({ length: 10 }).forEach((_, index) => {
  usersDao.insert({
    id: index,
    name: `User ${index}`,
    email: `${index}user@email.com`,
    password: `${index}userpassword`,
  });
});

// create 10 orders
Array.from({ length: 10 }).forEach((_, index) => {
  ordersDao.insert({
    id: index,
    userId: index,
    productIds: [index, index + 1],
  });
});

// find user by id
const user = usersDao.find(1);

console.log(user);

// find product by id
const product = productsDao.find(1);

console.log(product);

// find order by id
const order = ordersDao.find(1);

console.log(order);

// find all users
const users = usersDao.findAll();

console.log(users);

// find all products
const products = productsDao.findAll();

console.log(products);

// find all orders
const orders = ordersDao.findAll();

console.log(orders);

// update user

const userToUpdate = usersDao.find(1);

userToUpdate.name = "User 1 updated";

usersDao.update(userToUpdate);

console.log(usersDao.find(1));

// update product

const productToUpdate = productsDao.find(1);

productToUpdate.name = "Product 1 updated";

productsDao.update(productToUpdate);

console.log(productsDao.find(1));

// update order

const orderToUpdate = ordersDao.find(1);

orderToUpdate.userId = 2;

ordersDao.update(orderToUpdate);

console.log(ordersDao.find(1));

// delete user

usersDao.delete(1);

console.log(usersDao.findAll());

// delete product

productsDao.delete(1);

console.log(productsDao.findAll());

// delete order

ordersDao.delete(1);

console.log(ordersDao.findAll());

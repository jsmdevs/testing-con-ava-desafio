import test from "ava";
import { Product, User } from "./index";


test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});

test("Testeo la clase User y sus métodos", (t) => {
  const product = new Product("Nuevo producto", 1500);
   const user = new User('Joaquin');
   user.addProduct(product);

   t.is(user.name, 'Joaquin');
   t.is(user.products[0].name, 'Nuevo producto');
   t.is(user.products[0].price, 1500);
});

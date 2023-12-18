class ProductManager {
  constructor() {
    this.products = [];
  }
  static id = 0;

  addProducts(title, description, price, image, stock, codigo) {
    ProductManager.id++;
    this.products.push({
      title,
      description,
      price,
      image,
      stock,
      codigo,
      id: ProductManager.id,
    });
  }

  getProduct() {
    return this.products;
  }

  getProductById(id) {
    if (this.products.find((producto) => producto.id === id)) {
      console.log("El producto se encuentra en DB");
    } else {
      console.log("El producto no existe o no se encuentra ingresado a DB");
    }
  }
}

const productos = new ProductManager();

productos.addProducts(
  "Art1",
  "Descripcion1",
  100,
  "imagenPrueba1",
  5,
  "Item ABC1"
);
productos.addProducts(
  "Art2",
  "Descripcion2",
  200,
  "imagenPrueba2",
  100,
  "Item ABC2"
);
productos.addProducts(
  "Art3",
  "Descripcion3",
  300,
  "imagenPrueba3",
  25,
  "Item ABC3"
);

console.log(productos.getProduct());
productos.getProductById(3);

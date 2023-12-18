class ProductManager {
  constructor() {
    this.products = [];
  }
  static id = 0;

  addProducts(title, description, price, image, stock) {
    ProductManager.id++;
    this.products.push({
      title,
      description,
      price,
      image,
      stock,
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

productos.addProducts("Art1", "Descripcion1", 100, "imagenPrueba1", 5);
productos.addProducts("Art2", "Descripcion2", 200, "imagenPrueba2", 100);
productos.addProducts("Art3", "Descripcion3", 300, "imagenPrueba3", 25);

console.log(productos.getProduct());
productos.getProductById(3);

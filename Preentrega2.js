import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.patch = "./productosLog.txt";
    this.products = [];
  }

  static id = 0;

  addProduct = async (title, description, price, image, stock, codigo) => {
    ProductManager.id++;

    let newProduct = {
      title,
      description,
      price,
      image,
      stock,
      codigo,
      id: ProductManager.id,
    };

    this.products.push(newProduct);
    await fs.writeFile(this.patch, JSON.stringify(this.products));
  };

  readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8");
    return JSON.parse(respuesta);
  };

  getProducts = async () => {
    let respuesta2 = await this.readProducts();
    return console.log(respuesta2);
  };
  getProductsById = async (id) => {
    let respuestaId = await this.readProducts();
    if (respuestaId.find((product) => product.id === id)) {
      console.log(respuestaId.find((product) => product.id === id));
    } else {
      console.log("El producto no se encuentra ingresado");
    }
  };
  deleteProductById = async (id) => {
    let deleteById = await this.readProducts();
    let deleteFilter = deleteById.filter((product) => product.id != id);
    await fs.writeFile(this.patch, JSON.stringify(deleteFilter));
    console.log("El producto indicado ha sido eliminado de la BD");
  };
  updateProduct = async ({ id, ...product }) => {
    await this.deleteProductById(id);
    let arrayinicial = await this.readProducts();
    let itemMododificado = [{ id, ...product }, ...arrayinicial];
    await fs.writeFile(this.patch, JSON.stringify(itemMododificado));
  };
}

const productos = new ProductManager();

//productos.getProducts();
//productos.getProductsById(4);
//productos.deleteProductById(2);
productos.updateProduct({
  title: "Art1",
  description: "Descripcion1",
  price: 550,
  image: "imagenPrueba1",
  stock: 5,
  codigo: "Item ABC1",
  id: 1,
});

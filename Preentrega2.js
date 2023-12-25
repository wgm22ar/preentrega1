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
    return await this.readProducts();
  };

  getProductsById = async (id) => {
    let respuestaId = await this.readProducts();
    let filterById = respuestaId.find((product) => product.id === id);
    console.log(filterById);
  };
}

const productos = new ProductManager();

//productos.getProducts();
productos.getProductsById(2);

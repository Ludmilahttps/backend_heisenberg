import { productsCollection } from "../database/db.js";

export const productList = async (req, res) => {
  try {
    const products = await productsCollection.find().toArray();
    res.send(products);
  } catch (error) {
    console.log(error);
  }
};

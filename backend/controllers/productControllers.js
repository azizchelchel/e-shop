import Product from "../models/product";

// create product
export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  console.log(product);
  res.status(201).json({ product });
};
//get product by name
export const getProduct = async (req, res) => {
  const { name } = req.query;
  const product = await Product.findOne({ name: `${name}` });
  res.status(200).json({ product });
};
//get all products
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

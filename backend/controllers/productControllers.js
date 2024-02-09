import Product from "../models/product";
export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
};

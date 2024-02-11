import axios from "axios";

const getProductsFromApi = async () => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getProductsFromApi };

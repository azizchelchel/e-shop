/** @type {import('next').NextConfig} */
// "mongodb+srv://chellala:Chellalaziz31@e-shop-cluster.wsmqjuh.mongodb.net/?retryWrites=true&w=majority"
const nextConfig = {
  env: {
    API_URL: "http://127.0.0.1:3000",
    API_URI: "mongodb://127.0.0.1:27017/e-shop",
  },
};

export default nextConfig;

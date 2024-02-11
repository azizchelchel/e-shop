import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createProduct,
  getAllProducts,
} from "@/backend/controllers/productControllers";

const router = createRouter();

dbConnect();

router.post(createProduct);
router.get(getAllProducts);

export default router.handler();

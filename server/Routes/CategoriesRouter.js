import express from "express";
import * as categoriesController from "../Controllers/CategoriesController.js";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();

router.get("/", categoriesController.getCategories);

router.post("/", protect, admin, categoriesController.createCategories);
router.put("/:id", protect, admin, categoriesController.updateCategories);
router.delete("/:id", protect, admin, categoriesController.deleteCategories);

export default router;

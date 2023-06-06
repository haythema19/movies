import express from "express";
import * as userController from "../Controllers/UserController.js";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/", userController.registerUser);
router.post("/login", userController.loginUser);

router.put("/", protect, userController.updateProfile);
router.put("/password", protect, userController.changePassword);
router.delete("/", protect, userController.deleteUserProfile);

router.get("/favorites", protect, userController.getLikedMovies);
router.post("/favorites", protect, userController.addLikedMovie);
router.delete("/favorites", protect, userController.deleteLikedMovies);

router.get("/", protect, admin, userController.getUsers);
router.delete("/:id", protect, admin, userController.deleteUser);

export default router;

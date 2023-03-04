import express from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

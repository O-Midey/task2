import express from "express";
import {
  createUser,
  deleteUserById,
  findOneUser,
  getAllUsers,
  partialUpdateUserById,
  updateUserById,
} from "./controllers/userController.js";

const router = express.Router();

//Define Routes
router.route("/").post(createUser).get(getAllUsers);
router
  .route("/:id")
  .get(findOneUser)
  .put(updateUserById)
  .patch(partialUpdateUserById)
  .delete(deleteUserById);

export default router;

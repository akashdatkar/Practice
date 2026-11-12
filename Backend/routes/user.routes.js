import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { registerUserController } from "../controllers/registerUser.controller.js";

const router=Router()

router.route("/register").get(upload.single("profile"),registerUserController);

export default router;
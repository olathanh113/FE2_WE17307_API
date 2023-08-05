import express from "express";
import { Signin, SignUp ,getUsers,deleteUser} from "../controllers/user";

const router = express.Router();

router.post("/SignUp", SignUp);
router.post("/Signin", Signin);
router.get("/users", getUsers);
router.delete("/users/:userId",deleteUser);

export default router;

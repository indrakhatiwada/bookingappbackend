import express, { response } from "express";
import{updateUser,deleteUser,getUserById,getUsers} from '../controllers/userController.js'
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();
router.get('/checkAuth',verifyToken, (req,res,next) => {

    response.send("You are logged in")
})

//update
router.put("/:id", updateUser)

//find by id and delete
router.delete("/:id", deleteUser)

//find User by id

router.get("/:id",getUserById)


//get all
router.get("/", getUsers)


export default router;
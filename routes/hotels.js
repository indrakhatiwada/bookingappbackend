import express from "express";
import { createHotel, deleteHotel, getHotelById, getHotels, UpdateHotel } from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "./errorFile.js";


const router = express.Router();

//create
router.post("/", createHotel)
//update
router.put("/:id", UpdateHotel)

//find by id and delete
router.delete("/:id", deleteHotel)

//find hotel by id

router.get("/:id",getHotelById)


//get all
router.get("/", getHotels)


export default router;
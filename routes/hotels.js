import express from "express";
import Hotel from "../models/Hotel.js";


const router = express.Router();

//create
router.post("/", async (req,res)=>{
    const newHotel = new Hotel(req.body)
    
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    }catch(err){
        res.status(500).json(err)
    }

})
//update
router.put("/:id", async (req,res)=>{
    //passing req params so that it can find particular
    //hotel by if
    try{
        //finds hotel and updates
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id)

        res.status(200).json(savedHotel)

    }catch(err){
        res.status(500).json(err)
    }

})

//get
//get all


export default router;
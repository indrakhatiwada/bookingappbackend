import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "./errorFile.js";


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
    //hotel by id
    try{
        //finds hotel and updates
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})

        res.status(200).json(updatedHotel)

    }catch(err){
        res.status(500).json(err)
    }

})

//find by id and delete
router.delete("/:id", async (req,res)=>{
    //passing req params so that it can find particular
    //hotel by id
    try{   
        await Hotel.findByIdAndDelete(req.params.id) ;    

        res.status(200).json("Hotel deleted")

    }catch(err){
        next(err)
    }

})

//find hotel by id

router.get("/:id", async (req,res,next)=>{
    //passing req params so that it can find particular
    //hotel by id
    
    try{
        //finds hotel and updates
        const hotel = await Hotel.findById(req.params.id)

        res.status(200).json(hotel)

    }catch(err){
        next(err);
    }

})


//get all
router.get("/", async (req,res)=>{ 
   
    
    try{
        const hotels =  await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        res.status(500).json(err)
    }
})


export default router;
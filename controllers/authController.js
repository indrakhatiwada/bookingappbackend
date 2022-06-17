import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
    })

    await newUser.save();
    res.status(200).send("User has been registered successfully");
      
        
    } catch (error) {
        next(error);
    }

};

export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({username: req.body.username})
      if(!user) return next(new Error("User not found"));
      const isPasswordCorrect = await bcrypt.compare(
       req.body.password, user.password
      )
      if(!isPasswordCorrect) return next(new Error("wrong password or username"))

      const {password,isAdmin , ...userData} = user._doc;

    res.status(200).json({...userData});
      
        
    } catch (error) {
        next(error);
    }

};



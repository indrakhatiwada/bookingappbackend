import jwt from 'jsonwebtoken';
import {createError} from './error.js'

export const verifyToken = (req, res,next) =>{
const token = req.cookies.access_token
if(!token){
    return new Error('You are not authenticated')
}

jwt.verify(token,process.env.JWT, (err, user) =>{
   if(err){
    return new Error("could not verify token")
} 
req.user = user;
next()
})


}
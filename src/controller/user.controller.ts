import { Request, Response } from "express";
import UserService from "../service/user.service";

class UserController{
    static async listUsers(req:Request,res: Response){
        const users = await UserService.getAllUsers()
        res.status(200).json({user: users, message: "si"})   
    }
    
    static async createUser(req:Request, res:Response){
        try{
            const newUser = await UserService.createUser(req.body)
            res.status(201).json({user: newUser, message: "user create successfully"})
        }catch(err){
            console.log(err);
            
        }
    }
}

export default UserController
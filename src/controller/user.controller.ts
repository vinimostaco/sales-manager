import { Request, Response } from "express";
import UserService from "../service/user.service";
import { UpdateUserDTO } from "../dto/update-user.dto";

class UserController{
    static async listUsers(req:Request,res: Response){
try{
    const users = await UserService.getAllUsers()
    res.status(200).json(users)   
}catch(err){
    if(err instanceof Error){
        res.status(500).json({message: "Error trying to list users", error: err})
    }
}
    }

    static async listUser(req:Request, res: Response){
try{
    const {id} = req.params
    const user = await UserService.getUser(Number(id))
    res.status(200).json(user)
}catch(err){
    if(err instanceof Error){
        res.status(500).json({message: "Error trying to list user", error: err})
    }
}
    }

    static async createUser(req:Request, res:Response){
        try{
            const newUser = await UserService.createUser(req.body)
            res.status(201).json({user: newUser, message: "user create successfully"})
        }catch(err){
            if(err instanceof Error){
                res.status(500).json({message: "Error trying to create user", error: err})
            }
        }
    }

    static async updateUser(req:Request, res: Response){
        try{
            const updateData: UpdateUserDTO  = req.body
            const updatedUser = await UserService.updateUser(Number(req.params.id),updateData)
            res.status(200).json({user: updatedUser, message: "user updated successfully"})
        }catch(err)
        {
            if(err instanceof Error){
                res.status(500).json({message: "Error trying to update user", error: err})
            }
        }
    }


}

export default UserController
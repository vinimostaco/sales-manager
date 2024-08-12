import prisma from "../config/db"
import {User} from "@prisma/client"

class UserService {
    static async getAllUsers(){
        return prisma.user.findMany()
    }

    static async createUser(user: User){
        return prisma.user.create({
            data:{
                name: user.name,
                email: user.email,
                password: user.password
            }
        })
    }
}
export default UserService
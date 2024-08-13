import prisma from "../config/db"
import {User} from "@prisma/client"

class UserService {
    static async getAllUsers(){
        return prisma.user.findMany()
    }

    static async getUser(id:number){
        return prisma.user.findUnique({
            where: {
                id: id
            }
        })
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

    static async updateUser(id:number, data:Partial<User>){
        return prisma.user.update({
            where:{id},data
        })
    }
}
export default UserService
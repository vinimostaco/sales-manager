import prisma from "../config/db"
import {User} from "@prisma/client"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
class UserService {

    static async login(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        return token;
    }


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

    static async deleteUser(id: number){
        return prisma.user.delete({
            where:{id}
        })
    }
}
export default UserService
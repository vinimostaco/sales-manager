import UserController from "../controller/user.controller";
import {Router} from "express";
import { validateDTO } from "../dto/validate.dto";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UpdateUserDTO } from "../dto/update-user.dto";

const routes = Router()

routes.get("/users", UserController.listUsers)
routes.get("/users/:id", UserController.listUser)
routes.post('/users', validateDTO(CreateUserDTO), UserController.createUser);
routes.put("/users/:id", validateDTO(UpdateUserDTO),UserController.updateUser)
export default routes
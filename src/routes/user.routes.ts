import UserController from "../controller/user.controller";
import {Router} from "express";
import { validateDTO } from "../middleware/validate.dto";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UpdateUserDTO } from "../dto/update-user.dto";

const routes = Router()

routes.get("/users", UserController.listUsers)
routes.get("/users/:id", UserController.listUser)
routes.post('/users', validateDTO(CreateUserDTO), UserController.createUser);
routes.put("/users/:id", validateDTO(UpdateUserDTO),UserController.updateUser)
routes.delete("/users/:id", UserController.deleteUser)
export default routes
import UserController from "../controller/user.controller";
import {Router} from "express";

const routes = Router()

routes.get("/users", UserController.listUsers)
routes.post("/users", UserController.createUser)
export default routes
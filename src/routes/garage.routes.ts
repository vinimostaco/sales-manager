import { Router } from "express";
import GarageController from "../controller/garage.controller";

const routes = Router();

routes.get("/", GarageController.listGarages);

export default routes;

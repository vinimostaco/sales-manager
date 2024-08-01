import { Router } from "express";
import GarageController from "../controller/garage.controller";

const routes = Router();

routes.get("/", GarageController.listGarages);
routes.post("/", GarageController.addGarage);

export default routes;

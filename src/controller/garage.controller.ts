import { Request, Response } from "express";
import GarageService from "../services/garage.services";

class GarageController {
  static async listGarages(req: Request, res: Response) {
    try {
      const garages = await GarageService.getAllGarages();
      res.json(garages);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async addGarage(req: Request, res: Response) {
    const newGarage = await GarageService.addGarage(req.body);
    res.status(201).json(newGarage);
  }
}

export default GarageController;

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
}

export default GarageController;

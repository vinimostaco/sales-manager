import prisma from "../config/db";
import { Garage } from "@prisma/client";
class GarageService {
  static async getAllGarages() {
    return prisma.garage.findMany();
  }

  static async addGarage(params: Garage) {
    return prisma.garage.create({
      data: {
        name: params.name,
        location: params.location,
        capacity: params.capacity,
        pricePerHour: params.pricePerHour,
      },
    });
  }
}

export default GarageService;

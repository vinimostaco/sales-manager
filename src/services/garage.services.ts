import prisma from "../config/db";
class GarageService {
  static async getAllGarages() {
    return prisma.garage.findMany();
  }
}

export default GarageService;

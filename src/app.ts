import express from "express";
import garageRoutes from "./routes/garage.routes";
const app = express();
app.use(express.json());
app.use("/garages", garageRoutes);
export default app;

import { Router } from "express";
import TemperaturaController from "../controllers/temperaturaController.js";

const temperaturaRouter = Router();
const temperaturaController = new TemperaturaController()

temperaturaRouter.get("/", temperaturaController.getAllTemperaturas);
temperaturaRouter.get("/:id", temperaturaController.getTemperaturasBySondaId);
temperaturaRouter.post("/", temperaturaController.createTemperatura);


export default temperaturaRouter;
import { Router } from "express";
import temperaturaRouter from "./temperaturaRouter.js";

const router = Router();
router.use("/temperatura", temperaturaRouter);



export default router;
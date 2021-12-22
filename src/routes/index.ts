import { Router } from "express";
import multiFormRouter from "./multiForm.routes";

const routes = Router();

routes.use("/multi", multiFormRouter);

export default routes;

import { Router } from "express";
import { index } from "./controller/user";

const routes = Router();

routes.get("/", index);

export default routes;

import { Router } from "express";
import { index, create } from "./controller/user";

const routes = Router();

routes.get("/", index);
routes.get("/create", create);

export default routes;

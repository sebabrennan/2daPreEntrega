import { Router } from "express";
import { getAll, getById, create, update, remove } from "../controllers/product.controllers.js";

const router = Router();

router.get("/", getAll);

router.get("/", getById);

router.post("/", create);

router.put("/", update);

router.delete("/", remove);

export default router;

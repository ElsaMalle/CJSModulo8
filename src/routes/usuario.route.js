import { Router } from "express";
import { UsuarioController } from "../controllers/Usuario.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/usuarios', checkAuth, UsuarioController.findAll)
router.put('/usuarios/:id', checkAuth, UsuarioController.update)
router.post('/usuarios', checkAuth, UsuarioController.create)
export default router
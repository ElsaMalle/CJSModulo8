import { Router } from "express";
import { MedicoController } from "../controllers/Medico.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/', checkAuth, MedicoController.getAll)
router.get('/:rut', checkAuth, MedicoController.getByRut)
router.post('/', checkAuth, MedicoController.create)
router.put('/:rut', checkAuth, MedicoController.update)
router.delete('/:rut', checkAuth, MedicoController.remove)

export default router
import { Router } from "express";
import { PacienteController } from "../controllers/Paciente.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/', checkAuth, PacienteController.getAll)
router.get('/:rut', checkAuth, PacienteController.getByRut)
router.post('/', checkAuth, PacienteController.create)
router.put('/:rut', checkAuth, PacienteController.update)
router.delete('/:rut', checkAuth, PacienteController.remove)

export default router
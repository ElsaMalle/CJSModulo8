import { Router } from 'express'
import { FileController } from '../controllers/File.controller.js'
import { fileUploadMiddleware, validateFile } from '../middlewares/file.middleware.js'
import { checkAuth } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/', checkAuth, fileUploadMiddleware, validateFile, FileController.upload)
router.get('/', checkAuth, FileController.findAll)

export default router
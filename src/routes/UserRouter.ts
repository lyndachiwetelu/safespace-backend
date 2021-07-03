import express from 'express'
import UserController from '../controllers/UserController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateSignup } from '../middleware/UserRequest'
const router = express.Router()

router.get('/', authenticateToken, UserController.getUsers)
router.post('/', validateSignup, UserController.createUser)

export default router
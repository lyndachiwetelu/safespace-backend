import express from 'express'
import UserController from '../controllers/UserController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateLogin, validateSignup } from '../middleware/UserRequest'
const router = express.Router()

router.get('/', authenticateToken, UserController.getUsers)
router.post('/', validateSignup, UserController.createUser)
router.post('/login', validateLogin, UserController.loginUser)

export default router
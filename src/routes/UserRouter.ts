import express from 'express'
import UserController from '../controllers/UserController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateLogin, validateSignup, validateUpdateUserSettings } from '../middleware/UserRequest'
const router = express.Router()

router.get('/', authenticateToken, UserController.getUsers)
router.post('/', validateSignup, UserController.createUser)
router.post('/login', validateLogin, UserController.loginUser)
router.patch('/:id/settings', authenticateToken, validateUpdateUserSettings, UserController.updateUserSettings)

export default router
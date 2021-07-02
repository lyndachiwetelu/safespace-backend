import express from 'express'
import UserController from '../controllers/UserController'
import { validateSignup } from '../middleware/UserRequest'
const router = express.Router()

router.get('/', UserController.getUsers)
router.post('/', validateSignup, UserController.createUser)

export default router
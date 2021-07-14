import express from 'express'
import InviteCodeController from '../controllers/InviteCodeController'
import { authenticateToken } from '../middleware/Authenticate'
const router = express.Router()

router.post('/', authenticateToken, InviteCodeController.createInviteCode)

export default router
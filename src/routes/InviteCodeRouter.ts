import express from 'express'
import InviteCodeController from '../controllers/InviteCodeController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateAddInvite } from '../middleware/InviteCodeRequest'
const router = express.Router()

router.post('/', authenticateToken, validateAddInvite, InviteCodeController.createInviteCode)
router.get('/check/:code', InviteCodeController.checkInviteCode)

export default router
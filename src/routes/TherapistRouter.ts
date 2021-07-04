import express from 'express'
import TherapistController from '../controllers/TherapistController'
import { authenticateToken } from '../middleware/Authenticate'
const router = express.Router()

router.get('/list/:userId', authenticateToken, TherapistController.getMatchingTherapistsForUser)

export default router
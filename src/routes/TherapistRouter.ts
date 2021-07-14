import express from 'express'
import TherapistController from '../controllers/TherapistController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateTherapistSignup } from '../middleware/TherapistRequest'
const router = express.Router()

router.get('/list/:userId', authenticateToken, TherapistController.getMatchingTherapistsForUser)
router.get('/:id', authenticateToken, TherapistController.getSingleTherapist)
router.post('/', validateTherapistSignup, TherapistController.createTherapist)

export default router
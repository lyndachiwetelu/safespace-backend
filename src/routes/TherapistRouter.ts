import express from 'express'
import TherapistController from '../controllers/TherapistController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateTherapistSignup } from '../middleware/TherapistRequest'
import { validateLogin } from '../middleware/UserRequest'
const router = express.Router()

router.get('/list/:userId', authenticateToken, TherapistController.getMatchingTherapistsForUser)
router.get('/:id', authenticateToken, TherapistController.getSingleTherapist)
router.post('/', validateTherapistSignup, TherapistController.createTherapist)
router.post('/login', validateLogin, TherapistController.loginTherapist)

export default router
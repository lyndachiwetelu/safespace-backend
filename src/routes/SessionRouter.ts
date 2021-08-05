import express from 'express'
import SessionController from '../controllers/SessionController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateAddSession, validateAddSessionMessage, validateUpdateSessionStatus } from '../middleware/SessionRequest'
const router = express.Router()

router.get('/therapist/:userId', authenticateToken, SessionController.getSessionsForTherapist)
router.get('/patient/:userId', authenticateToken, SessionController.getSessionsForPatient)
router.post('/', authenticateToken, validateAddSession, SessionController.addSession)
router.delete('/:id', authenticateToken, SessionController.deleteSession)
router.patch('/:id/status', authenticateToken, validateUpdateSessionStatus, SessionController.updateStatus)
router.get('/:id', authenticateToken, SessionController.getSingleSession)
router.post('/:id/messages', authenticateToken, validateAddSessionMessage, SessionController.saveSessionMessage)
router.get('/:id/messages', authenticateToken, SessionController.getSessionMessages)

export default router
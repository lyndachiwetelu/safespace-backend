import express from 'express'
import AvailabilityController from '../controllers/AvailabilityController'
import { authenticateToken } from '../middleware/Authenticate'
import { validateAddAvailability } from '../middleware/AvailabilityRequest'
const router = express.Router()

router.get('/:userId', authenticateToken, AvailabilityController.getAvailabilities)
router.post('/:userId', authenticateToken, validateAddAvailability, AvailabilityController.addAvailability)

export default router
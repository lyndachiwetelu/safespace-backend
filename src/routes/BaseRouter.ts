import express from 'express'
import BaseController from '../controllers/BaseController'
const router = express.Router()

router.get('/', BaseController.helloWorld)

export default router
import Joi from 'joi'

export const AddSessionMessageSchema = Joi.object({
  message: Joi.string().required(),
  userId: Joi.number().required()    
})
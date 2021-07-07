import Joi from 'joi'

export const UpdateSessionStatusSchema = Joi.object({    
    status: Joi.string()
        .min(4)
        .valid('created', 'confirmed', 'past', 'active', 'cancelled')
        .required(),
    
})
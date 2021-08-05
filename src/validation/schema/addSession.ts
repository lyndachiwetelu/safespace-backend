import Joi from 'joi'

export const AddSessionSchema = Joi.object({
    from: Joi.string()
        .min(4)
        .required(),

    to: Joi.string()
        .min(4)
        .required(),
    
    requestedBy: Joi.number()
        .required(),
    
    availabilityId: Joi.number()
        .required(),
    
    status: Joi.string()
        .min(4)
        .valid('created', 'confirmed', 'past', 'active', 'cancelled')
        .required(),
    
})
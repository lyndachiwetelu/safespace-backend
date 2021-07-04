import Joi from 'joi'

export const LoginUserSchema = Joi.object({
    password: Joi.string()
        .min(6)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    
})
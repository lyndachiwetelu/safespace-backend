import Joi from 'joi'

export const SignupTherapistSchema = Joi.object({
    password: Joi.string()
        .min(6)
        .max(60)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    
})
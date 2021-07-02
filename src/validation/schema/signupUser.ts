import Joi from 'joi'

export const SignupUserSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(40)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^(?=[A-Za-z0-9@%&#!.<>?]{6,30}$)(?=.*\d)(?=.*[A-Za-z]).*$'))
        .required(),

    age: Joi.number()
        .integer()
        .min(18)
        .max(200),

    email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    
})
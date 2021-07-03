import Joi from 'joi'

export const LoginUserSchema = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^(?=[A-Za-z0-9@%&#!.<>?]{6,30}$)(?=.*\d)(?=.*[A-Za-z]).*$'))
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    
})
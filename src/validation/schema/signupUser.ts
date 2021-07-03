import Joi from 'joi'

export const SignupUserSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(40)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^(?=[A-Za-z0-9@%&#!.<>?]{6,30}$)(?=.*\d)(?=.*[A-Za-z]).*$'))
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),

    settings: Joi.object().keys(
        {
            age: Joi.number()
                .integer()
                .min(18)
                .max(200)
                .required(),
            
            hasHadTherapy: Joi.bool()
                            .required(),
        
            ailments: Joi.array()
                    .items(Joi.string())
                    .min(1)
                    .max(10)
                    .required(),
        
            religiousTherapy: Joi.string()
                .required(),
        
            media: Joi.array()
                .items(Joi.string())
                .min(1)
                .max(3)
                .required(),
        
            couplesTherapy: Joi.bool()
                            .required(),
        }
    ).required() 
    
})
import Joi from 'joi'

export const AddTherapistSettingsSchema = Joi.object({
    userId : Joi.number().required(),
    ageFrom: Joi.number().required(),
    ageTo: Joi.number().required(),
    summary: Joi.string()
        .required(),

    qualifications: Joi.string()
        .required(),

    name: Joi.string()
        .required(),

    
    imageUrl: Joi.string()
        .required(),

    timePerSession: Joi.string()
        .required(),

    pricePerSession : Joi.number().required(),

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
})
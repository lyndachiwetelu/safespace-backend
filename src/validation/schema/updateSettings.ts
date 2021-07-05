import Joi from 'joi'

export const UpdateUserSettingsSchema = Joi.object({
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
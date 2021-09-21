import Joi from 'joi'
import ailments from '../../data/ailments'
import media from '../../data/media'

export const UpdateUserSettingsSchema = Joi.object({
    ailments: Joi.array()
            .items(Joi.string().valid(...ailments.map(a => a.key)))
            .min(1)
            .max(10)
            .required(),

    religiousTherapy: Joi.string()
        .required(),

    media: Joi.array()
        .items(Joi.string().valid(...media.map(m => m.key)))
        .min(1)
        .max(3)
        .required(),

    couplesTherapy: Joi.bool()
                    .required(),
})
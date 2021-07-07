import Joi from 'joi'
import JoiDate from '@joi/date'

export const AddAvailabilitySchema = Joi.object({
    day: Joi.extend(JoiDate).date().format('YYYY-MM-DD')
        .required(),

    from: Joi.string()
        .min(4)
        .required(),

    to: Joi.string()
        .min(4)
        .required(),
    
})
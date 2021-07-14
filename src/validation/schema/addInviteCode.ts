import Joi from 'joi'

export const AddInviteSchema = Joi.object({
    code: Joi.string()
        .min(6)
        .required()
})
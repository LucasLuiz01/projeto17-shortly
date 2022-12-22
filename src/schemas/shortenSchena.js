import joi from "joi";

export const shortenSchena = joi.object({
    url: joi.string().required().min(3)
})
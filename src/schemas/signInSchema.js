import joi from "joi";
export const signInSchena = joi.object({
    email: joi.string().required().min(3),
    password: joi.string().required().min(3)
})
import joi from "joi";
export const signUpSchena = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().required().min(4),
    password: joi.string().required().min(3),
    confirmPassword: joi.string().required().min(3)
})
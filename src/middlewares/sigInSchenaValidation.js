import { signInSchena } from "../schemas/signInSchema.js";
export function signInSchemaValidation (req,res,next){
const validation = signInSchena.validate(req.body, {abortEarly: false})
if(validation.error){
    const err = validation.error.details.map(detail => detail.message);
    console.log(err);
    return res.status(422).send(err);
}
next();
}
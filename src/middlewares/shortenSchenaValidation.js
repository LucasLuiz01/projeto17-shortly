import { shortenSchena } from "../schemas/shortenSchena.js";

export function shortenSchenaValidation (req, res, next){
    const validation = shortenSchena.validate(req.body, {abortEarly: false})
if(validation.error){
    const err = validation.error.details.map(detail => detail.message);
    console.log(err);
    return res.status(422).send(err);
}
next();
}
import { signUpSchena } from "../schemas/signUp.Schena.js";

export  function signUpSchenaValidation (req, res, next){
    const {password, confirmPassword} = req.body;

    const validation = signUpSchena.validate(req.body, {abortEarly: false});
    if(validation.error){
        const err = validation.error.details.map(detail => detail.message);
        console.log(err);
        return res.status(422).send(err);
    }
    if(password !== confirmPassword){
        return res.status(422).send("Insira senhas iguais")
    }

    next();

}
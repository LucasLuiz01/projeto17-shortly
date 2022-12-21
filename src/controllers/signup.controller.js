import { connection } from "../database/db.js";

export async function cadastro(req, res){
    const {name, email, password, confirmPassword } = req.body
    try{
        const insertion = await connection.query(`
        INSERT INTO 
            "signUp"
        (name, email, password)
            VALUES($1, $2, $3)
        `, [name, email, password])

    }catch(err){
        console.log(err)
        res.status(409).send(err)
    }
}


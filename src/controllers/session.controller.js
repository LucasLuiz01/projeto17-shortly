import { connection } from "../database/db.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";

export async function cadastro(req, res){
    const {name, email, password } = req.body
    const senhaCriptografada = bcrypt.hashSync(password, 5);
    try{
        await connection.query(`
        INSERT INTO 
            "signUp"
        (name, email, password)
            VALUES($1, $2, $3)
        `, [name, email, senhaCriptografada])
        return res.status(201).send("Dados inseridos com sucesso");
    }catch(err){
        console.log(err)
        res.status(409).send(err)
    }
}

export async function login (req, res){
    const {password, email} = req.body;
    const buscandoUser = await connection.query(`SELECT * FROM "signUp" WHERE email = $1`, [email])
    console.log(buscandoUser.rows)
    if(buscandoUser.rows.length === 0){
        return res.status(401).send("EMAIL INVALIDO");
    }
    const compararSenha = bcrypt.compareSync(password, buscandoUser.rows[0].password)
    console.log(compararSenha)
    if(!compararSenha){
        return res.status(401).send("SENHA INCORRETA")
    }
    let userId = buscandoUser.rows[0].id
  const token = uuid()
  try{
    await connection.query(`
    INSERT INTO 
    "signIn"
    ("userId", token)
    VALUES
    ($1, $2)
    `, [userId, token]);
    return res.status(200).send({userId, token});

  }catch(err){
    console.log(err)
    return res.status(400).send(err)
  }
    
}

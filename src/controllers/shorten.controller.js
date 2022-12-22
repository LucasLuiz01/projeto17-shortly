import { connection } from "../database/db.js";
import { nanoid } from "nanoid";

export async function shortenUrl (req, res) {
    const {url} = req.body;
    const {authorization} = req.headers;
    console.log(authorization)
    if(!authorization){
        return res.sendStatus(401);
    }
    const shorten = nanoid(6);
    const token = authorization.replace("Bearer ", "")
    const usuario = await connection.query(`SELECT * FROM "signIn" WHERE token = $1`, [token])
    if(usuario.rows.length === 0){
        return res.status(401).send("USUARIO NAO AUTORIZADO")
    }
    const userId = usuario.rows[0].userId
    try{
        await connection.query(`INSERT INTO shorten 
        (url, "shortUrl", "userId") 
        VALUES ($1, $2, $3)`
        ,[url, shorten, userId])
        return res.status(201).send({shorten});
    }catch(err){
        console.log(err);
        return res.status(422).send(err.detail)
    }
}
export async function getUrlId (req, res) {
    const {id} = req.params;
    try{
        const getUrl = await connection.query("SELECT * FROM shorten WHERE id = $1" ,[id])
        if(getUrl.rows.length === 0){
            return res.status(404).send("URL NAO ENCONTRADA");
        } 
         delete getUrl.rows[0].userId
        return res.status(201).send(getUrl.rows[0]);
    }catch(err){
    console.log(err);
    return res.status(500).send(err)
    }
}
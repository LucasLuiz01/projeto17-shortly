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
         delete getUrl.rows[0].linkAcess
         delete getUrl.rows[0].createdAt
        return res.status(201).send(getUrl.rows[0]);
    }catch(err){
    console.log(err);
    return res.status(500).send(err)
    }
}

export async function openShortUrl (req, res){
    const {shortUrl} = req.params;
   try{ const findUrl = await connection.query(`
    SELECT * FROM shorten
    WHERE "shortUrl" = $1
    `, [shortUrl])
    if(findUrl.rows.length === 0){
        return res.status(401).send("URL nao encontrada")
    }
    let adicionar = findUrl.rows[0].linkAcess + 1
     await connection.query(`UPDATE shorten 
    SET "linkAcess" = $1 
    WHERE "shortUrl" = $2`, [adicionar, shortUrl]);
    const link = findUrl.rows[0].url
    console.log(typeof(link));
    return res.redirect(link)
    
}catch (err){
    return res.sendStatus(400)
}
}

export async function deleteUrl (req, res){
    console.log("oi")
    const {authorization} = req.headers;
    const {id} = req.params
    const token = authorization.replace("Bearer ", "")
    console.log(token)
    let userIdToken;
    let userIdUrl;
    console.log("oi")
    if(!authorization){
        return res.sendStatus(401);
    }
    console.log("oi")
    try{
        const validationToken = await connection.query(`SELECT * FROM "signIn" WHERE token = $1`, [token])
       if(validationToken.rows.length === 0){
        return res.sendStatus(401)
       } 
       userIdToken = validationToken.rows[0].userId
   
   
        const validationId = await connection.query(`SELECT * FROM "shorten" WHERE id = $1`,[id])
       console.log("oi")
       if(validationId.rows.length === 0){
        return res.sendStatus(404)
       } 
       userIdUrl = validationId.rows[0].userId
       console.log("sdasddsadsadas",userIdUrl, userIdToken)
       if(userIdUrl !== userIdToken){
        return res.sendStatus(404);
    }
        await connection.query("DELETE FROM shorten WHERE id = $1",[id])
        return res.status(204).send("DELETADA COM SUCESSO");
      
    }catch(err){
        return res.status(500).send(err)
    }
  
   
}
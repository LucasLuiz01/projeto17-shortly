import { connection } from "../database/db.js";

export async function userMe (req, res){
    const {authorization} = req.headers;
    const token = authorization.replace("Bearer ", "")

    if(!authorization){
        return res.sendStatus(401)
    }
    try{
        const findId =  await connection.query(`SELECT * FROM "signIn" WHERE token = $1`, [token])
      if(findId.rows.length === 0){
        return res.sendStatus(401)
      }
      let userId = findId.rows[0].userId
      const userDados = await connection.query(`SELECT  
      u.id, u.name, 
      sum(s."linkAcess") as 
      "visitCount", 
      json_agg(
        json_build_object('id', s.id, 'shortUrl', 
        s."shortUrl", 'url', s.url, 'visitCount', 
        s."linkAcess")) 
        FROM shorten s JOIN "
        signUp" u ON s."userId" = 
        u.id WHERE "userId" = $1 GROUP BY u.id
      `, [userId])
        return res.status(201).send(userDados.rows[0])
    }catch(err){
        return res.status(401).send(err)
    }
}
import { connection } from "../database/db.js";

export async function userMe (req, res){
    const {authorization} = req.headers;
    const token = authorization.replace("Bearer ", "")

    if(!authorization){
        return res.sendStatus(401)
    }
    try{
        const findId =  await connection.query(`SELECT * FROM "signIn" WHERE token = $1`, [token])
      console.log(findId.rows)
        if(findId.rows.length === 0){
        return res.sendStatus(404)
      }
      let userId = findId.rows[0].userId
      console.log(userId)
      const userDados = await connection.query(`SELECT   u.id, u.name, sum(s."linkAcess") as "visitCount", json_agg(json_build_object('id', s.id, 'shortUrl', s."shortUrl", 'url', s.url, 'visitCount', s."linkAcess")) AS "shortenedUrls" FROM shorten s JOIN "signUp" u ON s."userId" = u.id WHERE "userId" = $1 GROUP BY u.id`,[userId])
     console.log(userDados)
      if(userDados.rows.length === 0){
        const nome = await connection.query(`SELECT * FROM "signUp" WHERE id = $1`,[userId])
        const userSemDados = {
          id:userId,
          name: nome.rows[0].name,
          visitCount: 0,
          shortenedUrls: []
        }
        return res.send(userSemDados);
      }
        return res.send(userDados.rows[0])
    }catch(err){
        return res.status(404).send(err)
    }
}

export async function ranking (req, res){
  try{
    const rank = await connection.query(`SELECT u.id, u.name,COUNT(s."userId") AS "linksCount",COALESCE(SUM(s."linkAcess"), 0)  as "visitCount" FROM "signUp" u LEFT JOIN shorten s ON u.id = s."userId" GROUP BY u.id ORDER BY "visitCount" DESC LIMIT 10`)
    return res.send(rank.rows);
  }catch(err){
    return res.status(404).send(err)
  }
}
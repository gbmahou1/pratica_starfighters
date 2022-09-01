import connection from "../database.pg";

export function getAllFighters(){
    
    const data = await connection.query(`
    SELECT * FROM fighters`)


}
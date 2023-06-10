import pool from "../db/connection";

class BooksController {
    public async get(req: any, res: any) {
        try {
            const client = await pool.connect();
            const sql = "SELECT * FROM todos";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();
            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default BooksController;
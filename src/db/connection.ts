import { Pool } from "pg";

export default new Pool ({
    max: 20,
    connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@http://localhost:5400/${process.env.POSTGRES_DB}`,
    idleTimeoutMillis: 30000
});
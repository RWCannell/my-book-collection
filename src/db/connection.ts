import { Pool } from "pg";

export default new Pool ({
    max: 20,
    connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.PG_CONTAINER_NAME}:5400/${process.env.POSTGRES_DB}`,
    idleTimeoutMillis: 30000
});
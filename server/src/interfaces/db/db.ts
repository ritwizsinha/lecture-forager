import { Pool, Client } from 'pg';
import { PG_HOSTNAME, PG_PASSWORD, PG_PORT, PG_USER, PG_DATABASE } from '../../constants/config';


export class DBWrapper {
    static pool: Pool;
    constructor() {
        if (!DBWrapper.pool)  {
            DBWrapper.pool = new Pool({
                user: PG_USER,
                host: PG_HOSTNAME,
                database: PG_DATABASE,
                password: PG_PASSWORD,
                port: Number(PG_PORT),
            });
        }
    }
}
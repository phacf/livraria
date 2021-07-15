import dotenv from 'dotenv'
import { DatabaseType,ServerType } from './configTypes'

dotenv.config();

export const server_config = {
    server_port: process.env.SERVER_PORT,
    server_host: process.env.SERVER_HOST,    
}

export const database_config = {
    database_user: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD,
    database_name: process.env.DATABASE_NAME,
    database_dialect: process.env.DATABASE_DIALECT,
    database_host: process.env.DATABASE_HOST,
}


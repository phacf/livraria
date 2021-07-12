import dotenv from 'dotenv'

dotenv.config();

export const SERVER_CONFIG = {
    SERVER_PORT: process.env.SERVER_PORT,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_USER: process.env.SERVER_USER,
    SERVER_PASS: process.env.SERVER_PASSWORD,
}


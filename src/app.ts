import express from 'express';
import {SERVER_CONFIG} from './util/config'

const app = express();
const env = process.env;
const port = Number(SERVER_CONFIG.SERVER_PORT);
const host = SERVER_CONFIG.SERVER_HOST

app.listen(port, '' + host,()=>{
    console.log(`Server listening to: ${host}:${port}`)
} )
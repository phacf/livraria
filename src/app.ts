import express from 'express';

//CONFIG
import {server_config, database_config} from './util/config';


//DATABASE
import { database_connect } from './models/db'

import {Books} from './models/books'

const app = express();
const env = process.env;
const { server_host, server_port } = server_config;


app.listen(Number(server_port), '' + server_host,()=>{
    console.log(`Server listening to ${server_host} port: ${server_port}`);
    database_connect();   
    new Books()
} )
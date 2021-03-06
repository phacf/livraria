import express from 'express';

//ENGINES
import {engine} from './engines/handlebars';

//CONFIG
import {server_config, database_config} from './util/config';

//DATABASE
import { database_connect } from './models/db'

//ROUTES
import { router } from './routes'

import { posts }from './models/posts'

const app = express();
const { server_host, server_port } = server_config;

//posts.sync({force: true})



app.engine('handlebars', engine)
app.set('view engine','handlebars')
app.set('views', '/home/paulo/progs/livraria/src/views')
app.use(express.urlencoded({extended: false}))// nao precisa mais instalar body parser
app.use(express.json())
app.use('/api', router);



app.listen(Number(server_port), '' + server_host,()=>{
    console.log(`Server listening to ${server_host} port: ${server_port}`);
    database_connect();   
    
} )

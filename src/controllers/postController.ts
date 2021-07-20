import {posts} from '../models/posts';

import {Request, Response} from 'express'
import { readBuilderProgram } from 'typescript';

export class Posts{


    showPage(req:Request, res:Response){
       
        return res.render('forms');
    };

    showPosts(req:Request, res:Response){
        posts.findAll()
        .then((R: any) => {
          
            return res.status(200).render('posts', {posts: R});
        })
        .catch((err)=> {return res.status(400).render('posts', {err});})
        
    };

    create(req:Request, res:Response){
        
        posts.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        })
        .then(response=> {
            return res.redirect('/api/posts')
        })
        .catch((err)=> {
            return res.status(400).send(err)
        })
    
        
    };
}


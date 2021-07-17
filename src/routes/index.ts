import { Router, Request, Response } from "express";
import { readBuilderProgram } from "typescript";



export const router = Router();

function vai(req: Request,res: Response){
    return res.render('forms')
}

router.route('/').get(vai)
router.route('/add').post((req: Request, res:Response)=>{
    console.log(req)
    return res.status(200).send('chegou')
})
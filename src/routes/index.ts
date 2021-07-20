import { Router } from "express";
import {Posts} from '../controllers/postController'

const post = new Posts()

export const router = Router();


router.route('/').get(post.showPage)
router.route('/posts').get(post.showPosts)
router.route('/add').post(post.create)
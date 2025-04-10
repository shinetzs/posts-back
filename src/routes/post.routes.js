import { Router } from 'express'
import {
  getPostsController,
  createPostController,
  deletePostController
} from '../controllers/post.controller.js'

const router = Router()

router.get('/', getPostsController)

router.post('/', createPostController)

router.delete('/:id', deletePostController)

export default router

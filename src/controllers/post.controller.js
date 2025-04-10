import {
  getAllPosts,
  createPost,
  deletePost
} from '../services/post.service.js'
import { PostDto } from '../dtos/post.dto.js'

export const getPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error getting posts', error: error.message })
  }
}

export async function createPostController (req, res) {
  try {
    const dto = PostDto.validateForCreate(req.body)
    const post = await createPost(dto)
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({ message: 'Error creating post', error: error.message })
  }
}

export async function deletePostController (req, res) {
  try {
    const dto = PostDto.validateForDelete(req.params)
    const result = await deletePost(dto)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ message: 'Error deleting post', error: error.message })
  }
}

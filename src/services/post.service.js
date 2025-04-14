import Post from '../models/post.models.js'

export async function getAllPosts () {
  return await Post.findAll()
}

export async function createPost (dto) {
  return await Post.create({
    name: dto.name,
    description: dto.description
  })
}

export async function deletePost (dto) {
  const deleted = await Post.destroy({ where: { id: dto.id } })
  if (!deleted) throw new Error('Post not found')
  return dto.id
}

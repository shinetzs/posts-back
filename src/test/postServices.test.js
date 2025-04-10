// // src/services/post.service.test.js

// import { createPost, getAllPosts, updatePost, deletePost } from '../src/services/post.service.js'
// import Post from '../src/models/post.models.js'

// jest.mock('../src/models/post.models.js')

// describe('Pruebas en el servicio de post', () => {
//   // Test de servicio para crear un post
//   it('debería crear un post exitosamente', async () => {
//     const mockPostData = { name: 'Nuevo Post', description: 'Descripción del nuevo post' }

//     // Mockeamos la respuesta de la creación
//     Post.create.mockResolvedValue(mockPostData)

//     const post = await createPost(mockPostData)

//     expect(post).toEqual(mockPostData)
//     expect(Post.create).toHaveBeenCalledWith(mockPostData) // Verificamos que se llamó con los datos correctos
//   })

//   // Test de servicio para obtener todos los posts
//   it('debería devolver todos los posts', async () => {
//     const mockPosts = [
//       { name: 'Post 1', description: 'Descripción 1' },
//       { name: 'Post 2', description: 'Descripción 2' }
//     ]

//     Post.findAll.mockResolvedValue(mockPosts)

//     const posts = await getAllPosts()

//     expect(posts).toEqual(mockPosts)
//     expect(Post.findAll).toHaveBeenCalled()
//   })

//   // Test de servicio para actualizar un post
//   it('debería actualizar un post exitosamente', async () => {
//     const mockPostData = { name: 'Post Actualizado', description: 'Descripción actualizada' }
//     const mockPost = { id: 1, ...mockPostData }

//     Post.update.mockResolvedValue([1, [mockPost]]) // Sequelize devuelve un array [número de filas afectadas, los registros actualizados]

//     const updatedPost = await updatePost(1, mockPostData)

//     expect(updatedPost).toEqual(mockPost)
//     expect(Post.update).toHaveBeenCalledWith(mockPostData, { where: { id: 1 } })
//   })

//   // Test de servicio para eliminar un post
//   it('debería eliminar un post exitosamente', async () => {
//     const mockPostId = 1

//     Post.destroy.mockResolvedValue(1) // Sequelize devuelve el número de filas eliminadas

//     const result = await deletePost(mockPostId)

//     expect(result).toBe(1) // Verificamos que la fila fue eliminada
//     expect(Post.destroy).toHaveBeenCalledWith({ where: { id: mockPostId } })
//   })
// })

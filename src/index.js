import express from 'express'
import cors from 'cors'
import postRoutes from './routes/post.routes.js'
import { getSequelizeInstance } from './config/db.config.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({ origin: '*' }))
app.use(express.json())

app.use('/posts', postRoutes)
const sequelize = getSequelizeInstance()
sequelize
  .authenticate()
  .then(() => {
    console.log('📦 Conectado a la base de datos')

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en puerto :${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err)
  })

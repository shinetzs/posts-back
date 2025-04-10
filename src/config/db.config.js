import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
let sequelizeInstance = null

export function getSequelizeInstance () {
  if (!sequelizeInstance) {
    sequelizeInstance = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: false
    })
  }

  return sequelizeInstance
}

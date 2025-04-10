import { DataTypes } from 'sequelize'
import { getSequelizeInstance } from '../config/db.config.js'

const sequelize = getSequelizeInstance()

const Post = sequelize.define('Post', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'post',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  paranoid: true
})
export default Post

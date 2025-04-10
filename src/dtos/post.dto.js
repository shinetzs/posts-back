export class PostDto {
  constructor (data) {
    this.name = data.name
    this.description = data.description
    this.id = data.id
  }

  static validateForCreate (data) {
    if (!data.name || !data.description) {
      throw new Error('Name and description are required')
    }
    return new PostDto(data)
  }

  static validateForDelete (data) {
    if (!data.id) {
      throw new Error('ID is required to delete a post')
    }
    return new PostDto(data)
  }
}

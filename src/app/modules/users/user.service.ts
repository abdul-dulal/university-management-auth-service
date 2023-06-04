import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const addUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string
  }

  const createdUser = await User.create(user)

  if (!addUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  addUser,
}

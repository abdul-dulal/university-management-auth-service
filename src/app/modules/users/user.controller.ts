import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    console.log(req.body)
    const result = await userService.addUser(user)
    res.status(200).json({
      success: true,
      message: 'User create successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Fail to create User ',
    })
  }
}

export default { createUser }

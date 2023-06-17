import { RequestHandler, Request, Response, NextFunction } from 'express';
import { userService } from './user.service';
import httpStatus from 'http-status';
import { IUser } from './user.interface';
import sendReponse from '../../../share/sendResponse';
import catchAsync from '../../../share/catchAsync';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await userService.addUser(user);

    sendReponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
    next();
  }
);

export const userController = {
  createUser,
};

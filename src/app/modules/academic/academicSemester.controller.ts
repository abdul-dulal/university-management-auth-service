import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../share/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../share/sendResponse';
import { IAcademicSemester } from './AcademicSemester.interface';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  }
);
export const AcademicSemesterController = {
  createSemester,
};

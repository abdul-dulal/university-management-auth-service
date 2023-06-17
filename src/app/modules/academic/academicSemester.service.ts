import httpStatus from 'http-status';
import { AcademicSemester } from './AcademicSemester.model';
import { IAcademicSemester } from './AcademicSemester.interface';
import { academicSemesterTitleCodeMapper } from './AcademicSemester.constant';
import ApiError from '../../../error/ApiError';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};

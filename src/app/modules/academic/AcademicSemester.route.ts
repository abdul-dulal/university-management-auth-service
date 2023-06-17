import express from 'express';
import { AcademicSemesterValidation } from './AcademicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';
import validatedRequest from '../../middleware/validatedRequest';

const router = express.Router();

router.post(
  '/create-semester',
  validatedRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

export const AcademicSemesterRoutes = router;

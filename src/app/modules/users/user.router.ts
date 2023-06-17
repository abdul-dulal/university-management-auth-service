import express from 'express';
import { userController } from './user.controller';
import { userValidation } from './user.validation';
import validatedRequest from '../../middleware/validatedRequest';
const router = express.Router();

router.post(
  '/create-user',
  validatedRequest(userValidation.createUserZodSchem),
  userController.createUser
);

export const userRoutes = router;

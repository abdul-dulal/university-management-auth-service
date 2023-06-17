import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from '../interface/type';
import { IGenericErrorgeResponse } from '../interface/error';

const handleZodError = (error: ZodError): IGenericErrorgeResponse => {
  const errors: IGenericErrorMessage[] = error?.issues.map(
    (issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message,
      };
    }
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleZodError;

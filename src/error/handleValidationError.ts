import mongoose from 'mongoose'
import { IGenericErrorgeResponse } from '../interface/error'
import { IGenericErrorMessage } from '../interface/type'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorgeResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}

export default handleValidationError

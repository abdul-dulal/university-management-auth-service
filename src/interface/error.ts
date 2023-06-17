import { IGenericErrorMessage } from './type'

export type IGenericErrorgeResponse = {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessage[]
}

import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoute from './app/modules/users/user.router'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
app.use('/api/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app

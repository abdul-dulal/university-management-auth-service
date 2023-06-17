import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();
import routes from './app/routes';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application route
app.use('/api', routes);
app.get('/', async (req: Request, res: Response) => {
  console.log(x);
});

app.use(globalErrorHandler);

export default app;

import express, { Application, Response } from 'express'
import { UserRoutes } from './app/modules/user/user.route'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/user', UserRoutes)

app.get('/', async ( /* req: Request, */ res: Response, /*next: NextFunction */) => {
  res.send('Hello From University!')
  // Promise.reject(new Error('Unhandled Promise Rejection'))
  // throw new Error('Intentional Error')
})

//global error handler
app.use(globalErrorHandler)

export default app

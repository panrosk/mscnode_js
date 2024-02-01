import express from 'express'
import { Request, Response, Express } from 'express'
import {stampsRouter,usersRouter,placesRouter} from "./routes"
import * as dotenv from 'dotenv';
import { AuthMiddleware } from './utils/auth';
dotenv.config();
import morgan from 'morgan';


const app:Express = express()
const port:number = 3000
app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req:Request, res:Response) => {
  res.sendStatus(200);

})

app.use('/users',usersRouter)
app.use('/places', placesRouter)
app.use('/stamps', stampsRouter)

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

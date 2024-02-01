import express, { Request, Response, Router } from 'express';
import { createUserController,signInUserController} from '../controllers/user.controller';

const usersRouter: Router = express.Router();

usersRouter.post('/signup',createUserController);


usersRouter.post('/signin',signInUserController);

export default usersRouter;


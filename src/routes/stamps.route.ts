import express from 'express';
import { Request, Response, Router } from 'express';
import { createStampCotroller, getUserStampsController,getPlaceStampsController,deleteStampController } from '../controllers/stamps.controller';

const stampsRouter: Router = express.Router();


stampsRouter.post('/',createStampCotroller);
stampsRouter.get('/user/:userId', getUserStampsController);
stampsRouter.get('/place/:placeId', getPlaceStampsController);
stampsRouter.delete('/:id', deleteStampController);

export default stampsRouter;


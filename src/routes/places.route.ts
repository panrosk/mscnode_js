import express from 'express';
import { Request, Response, Router } from 'express';
import { createPlaceController, getPlacesController,getPlaceController } from '../controllers/places.controller';

const placesRouter: Router = express.Router();

placesRouter.post('/', createPlaceController);
placesRouter.get('/', getPlacesController);
placesRouter.get('/:id', getPlaceController);

export default placesRouter;


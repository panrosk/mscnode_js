import { Request, Response } from 'express';
import { createPlace,getAllPlaces,getPlaces } from '../services/places.service';


export const createPlaceController = async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.address) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }
  const name = req.body.name;
  const address = req.body.address;

  try {
    const place = await createPlace(name, address);
    res.status(201).send(place);
  } catch (error) {
    res.status(400).send(error);
  }
}


//Should change name to getAllPlacesController
export const getPlacesController = async (req: Request, res: Response) => {
  try {
    const places = await getAllPlaces();
    res.send(places);
  } catch (error) {
    res.send(error); 
  }
};

export const getPlaceController = async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send({
      message: 'Params can not be empty!',
    });
    return;
  }

  const id = req.params.id;

  try {
    const place = await getPlaces(id);
    res.send(place);
    
  } catch (error) {
    res.send(error);
    
  }


}

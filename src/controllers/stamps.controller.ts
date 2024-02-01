
import { Request, Response } from 'express';
import {createStamp, getUserStamps,getPlaceStamps, deleteStamp } from "../services/stamps.service";


export const createStampCotroller = async (req: Request, res: Response) => {
  if (!req.body.userId || !req.body.placeId) {
    return res.status(400).json({ message: "userId and placeId are required" });
  }
  
  try {
    const stamp = await createStamp(req.body.userId, req.body.placeId);
    return res.status(201).json(stamp);
  } catch (error:any) {
    return res.status(400).json({ message: error.message });
  } 
}


export const getUserStampsController = async (req: Request, res: Response) => {
  if (!req.params.userId) {
    return res.status(400).json({ message: "userId is required" });
  }
  try {
    const stamps = await getUserStamps(req.params.userId);
    return res.status(200).json(stamps);
  } catch (error:any) {
    return res.status(400).json({ message: error.message });
  }
}

export const getPlaceStampsController = async (req: Request, res: Response) => {
  if (!req.params.placeId) {
    return res.status(400).json({ message: "placeId is required" });
  }
  try {
    const stamps = await getPlaceStamps(req.params.placeId);
    return res.status(200).json(stamps);
  } catch (error:any) {
    return res.status(400).json({ message: error.message });
  }

}


export const deleteStampController = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "id is required" });
  }
  try {
    await deleteStamp(req.params.id);
    return res.status(204).send();
  } catch (error:any) {
    return res.status(400).json({ message: error.message });
  }
}

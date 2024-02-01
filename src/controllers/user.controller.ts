import { Request, Response } from 'express';
import { createUser,signInUser } from '../services/user.service';


export const createUserController = async (req: Request, res: Response) => {

  if (!req.body) {
    return res.status(400).json({
      message: 'User content can not be empty',
    });
  }
  
  
  const { username, password,email } = req.body;
  

  if (!username || !password || !email) {
    return res.status(400).json({
      message: 'User content can not be empty, must have username,password and email',
    });
  }

  try {
    const user = await createUser(username, password,email);
    return res.status(201).json(user);
  } catch (error:any) {
    return res.status(400).json({
      message: 'User already exists',
      target:error.target
    });
  }
}


export const signInUserController = async (req: Request, res: Response) => {

  if (!req.body) {
    return res.status(400).json({
      message: 'User content can not be empty',
    });
  }
  
  
  const { username, password } = req.body;
  

  if (!username || !password) {
    return res.status(400).json({
      message: 'User content can not be empty, must have username and password',
    });
  }
  
  try {
    const user = await signInUser(username, password);
    return res.status(201).json(user);
  } catch (error:any) {
    return res.status(400).json({
      message: error.message,
    });
  }
  

}

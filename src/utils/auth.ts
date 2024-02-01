import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


import type { User } from "@prisma/client";


export const comparePasswords = (password:string, hash:string) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password:string) => {

  return bcrypt.hash(password, 5)
}


export const createJWT = (user:User) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!
  );
  return token;
};

export const AuthMiddleware = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: 'You are not authorized',
    });
  }

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({
      message: 'Token Missing',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    return next();
  }
  catch (err) {
    return res.status(401).json({
      message: 'Token Invalid',
    });
  }



}

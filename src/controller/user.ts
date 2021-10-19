import { Request, Response, NextFunction } from 'express';
import { User } from '../entity/user';

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const user = await User.find({});
    res.status(200).json({ code: 200, data: user });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { firstName, lastName, age } = req.body;
  try {
    const user = User.create({ firstName, lastName, age });
    const savedUser = await User.save(user);
    res.status(201).json({ code: 201, data: savedUser });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

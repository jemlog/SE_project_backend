import { Router } from 'express';
import * as userController from '../controller/user';

const router = Router();

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.put('/:id');

router.delete('/:id');

export default router;

import express from 'express';
import { UserController } from '../controllers/userController';
import {
  validateUserRegistration,
  handleValidationErrors,
} from '../middlewares/userValidationMiddleware';

const router = express.Router();

router.post(
  '/register',
  validateUserRegistration,
  handleValidationErrors,
  UserController.registerUser
);
router.post('/login', UserController.loginUser);
router.post('/:id', UserController.getUserById);

router.post('/logout', UserController.logoutUser);

export default router;

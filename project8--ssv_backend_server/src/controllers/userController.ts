// import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { Users } from '../entites/User';
// import { AppDataSource } from '../dataSource';

// const userRepository = AppDataSource.getRepository(Users);

// const registerUser = async (req: Request, res: Response) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new Users();
//     newUser.username = username;
//     newUser.email = email;
//     newUser.password = hashedPassword;

//     await userRepository.save(newUser);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to register user' });
//   }
// };

// const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     const user = await userRepository.findOneBy({ email });

//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
//     res.cookie('token', token, { httpOnly: true });

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to login' });
//   }
// };

// const logoutUser = (req: Request, res: Response) => {
//   res.clearCookie('token');
//   res.status(200).json({ message: 'Logged out successfully' });
// };

// export { registerUser, loginUser, logoutUser };

import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { AuthService } from '../services/authService';

export class UserController {
  static async registerUser(req: Request, res: Response): Promise<void> {
    console.log(req.body)
    try {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   res.status(400).json({ errors: errors.array() });
      //   return;
      // }

      const newUser = await UserService.registerUser(req.body);
      res
        .status(201)
        .json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: 'Internal Server Error',
        error: (error as Error).message,
        
      });
    }
  }

  static async loginUser(req: Request, res: Response): Promise<void> {
  
    try {
      const accessToken = await AuthService.loginUser(req.body, res);
      res.status(200).json({ message: 'Login successful', accessToken });
    } catch (error) {
      console.log(error)
      res.status(401).json({
        message: 'Invalid credentials',
        error: (error as Error).message,
      });
    }
  }

  static async logoutUser(req: Request, res: Response): Promise<void> {
    try {
      const refreshToken = req.cookies.refreshToken; // Extract refresh token from cookies
      if (!refreshToken) {
        res.status(400).json({ message: 'No refresh token provided' });
        return;
      }

      await AuthService.logoutUser(refreshToken);
      res.clearCookie('refreshToken'); // Clear the refresh token cookie
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        error: (error as Error).message,
      });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.getUserById(Number(req.params.id));
      res.status(200).json(user);
    } catch (error) {
      res
        .status(404)
        .json({ message: 'User not found', error: (error as Error).message });
    }
  }
}

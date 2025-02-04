import { AppDataSource } from '../config/db';
import { User } from '../entites/userEntity';
import bcrypt from 'bcrypt';

export class UserService {
  static async registerUser(userData: {
    username: string;
    email: string;
    password: string;
    phone:string;
  }) {
    const userRepository = AppDataSource.getRepository(User);

    // Check if email already exists
    const existingUser = await userRepository.findOne({
      where: { email: userData.email },
    });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create and save new user
    const newUser = userRepository.create({
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      password: hashedPassword,
    });
    return await userRepository.save(newUser);
  }

  static async getUserById(id: number) {
    const userRepository = AppDataSource.getRepository(User);

    // Find user by ID
    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

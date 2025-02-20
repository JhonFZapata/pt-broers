import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class SeedService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async seed() {
    const users = [
      {
        fullName: 'Admin User',
        email: 'admin@example.com',
        password: 'password123',
        isActive: true,
      },
      {
        fullName: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        isActive: true,
      },
    ];

    await this.userModel.deleteMany({});
    await this.userModel.insertMany(users);
  }
}
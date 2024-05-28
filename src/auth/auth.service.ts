import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDetails } from './utils/types';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async validate(user: UserDetails) {
    const USER = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
    console.log(USER);
    if (USER) return USER;
    const NEW_USER = await this.prisma.user.create({ data: user });
    return NEW_USER;
  }

  async findUser(id: number) {
    const USER = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}

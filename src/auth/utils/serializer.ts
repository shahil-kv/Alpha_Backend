import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private prisma: PrismaService) {
    super();
  }
  serializeUser(user: any, done: Function) {
    done(null, user);
  }
  async deserializeUser(payload: any, done: Function) {
    const USER = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });
    return USER ? done(null, USER) : done(null, null);
  }
}

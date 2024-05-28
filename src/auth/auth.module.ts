import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/google.strategy';
import { AuthService } from './auth.service';
import { SessionSerializer } from './utils/serializer';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    PrismaService,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}

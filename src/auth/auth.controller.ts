import { Controller, Get, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { GoogleAuthGuard } from './utils/auth.guard';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private config: ConfigService) {}
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async handleLogin() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async handleRedirect() {
    return { hi: 'hi' };
  }
}

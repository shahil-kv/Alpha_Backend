import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}
}

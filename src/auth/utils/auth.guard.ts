import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext) {
    const ACTIVATE = (await super.canActivate(context)) as boolean;
    const REQUEST = context.switchToHttp().getRequest();
    await super.logIn(REQUEST);
    return ACTIVATE;
  }
}

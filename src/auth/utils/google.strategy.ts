import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile } from 'passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    @Inject('AUTH_SERVICE') private authService: AuthService,
  ) {
    super({
      clientID: config.get('OAUTH_CLIENT_ID'),
      clientSecret: config.get('OAUTH_CLIENT_SECRET'),
      callbackURL: 'http://localhost:4002/google/callback',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const USER = await this.authService.validate({
      email: profile.emails[0].value,
      name: profile.displayName,
    });
    return USER || null;
  }
}

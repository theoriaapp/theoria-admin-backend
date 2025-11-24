import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CONSTANTS } from 'src/config/constants';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      // secret: 'super-secret-cat',
      // signOptions: { expiresIn: '60s' }
      secret: CONSTANTS.JWT_SECRET,
      // signOptions: { expiresIn: CONSTANTS.JWT_EXPIRES_IN }
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  signUser(user: any, expiredTime: any) {
    return this.jwtService.sign({
      sub: user.id_user,
      email: user.email,
      user_type: user.user_type
    },
      // { expiresIn: 3600 }
      { expiresIn: expiredTime }
    );
  }
}

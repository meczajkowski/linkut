import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, pass: string): Promise<any> {
    if (!email || !pass) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.userService.user({ email });
    if (!user || user.password !== pass) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async signUp(email: string, pass: string): Promise<any> {
    if (!email || !pass) {
      throw new BadRequestException('Email and password are required');
    }

    const userExists = await this.userService.user({ email });
    if (userExists) {
      throw new ConflictException('User already exists. Try logging in.');
    }

    const user = await this.userService.createUser({
      email,
      password: pass,
    });
    if (!user) {
      throw new BadRequestException('Could not register user');
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}

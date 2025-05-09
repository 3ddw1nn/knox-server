import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // You can override handleRequest here if you need custom error handling
  // or to customize the user object attached to the request.
  // For example, to throw a specific error message or type.
  // handleRequest(err, user, info, context, status) {
  //   if (err || !user) {
  //     // Log the error or info for debugging
  //     // console.error('JWT Auth Guard Error:', err, 'Info:', info, 'Status:', status);
  //     throw err || new UnauthorizedException('Invalid or missing JWT token.');
  //   }
  //   return user;
  // }
}

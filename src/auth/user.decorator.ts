import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthenticatedUser } from './jwt.strategy'; // Adjust path as needed
import { Request } from 'express'; // Import Express Request type

export const GetUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AuthenticatedUser | undefined => {
    const request = ctx.switchToHttp().getRequest<Request>(); // Explicitly type the request object
    // Ensure that the user property is treated as our AuthenticatedUser type
    return request.user as AuthenticatedUser | undefined;
  },
);

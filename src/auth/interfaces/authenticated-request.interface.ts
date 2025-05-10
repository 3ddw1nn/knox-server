import { Request } from 'express';
import { AuthenticatedUser } from '../jwt.strategy';

export interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}

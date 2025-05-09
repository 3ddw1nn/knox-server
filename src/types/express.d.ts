import { AuthenticatedUser } from '../auth/jwt.strategy'; // Adjust path as needed

declare global {
  namespace Express {
    export interface Request {
      user?: AuthenticatedUser;
    }
  }
}

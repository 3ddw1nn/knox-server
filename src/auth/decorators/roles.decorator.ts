import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum'; // Adjust path as needed

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

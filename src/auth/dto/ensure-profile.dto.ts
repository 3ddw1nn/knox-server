import { IsString, IsIn, IsOptional } from 'class-validator';

export class EnsureProfileDto {
  @IsString()
  @IsOptional()
  @IsIn(['EMPLOYEE', 'VENDOR', 'ADMIN'])
  intendedRole?: 'EMPLOYEE' | 'VENDOR' | 'ADMIN';
}

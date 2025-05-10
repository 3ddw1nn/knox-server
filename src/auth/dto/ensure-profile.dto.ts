import { IsString, IsIn, IsOptional } from 'class-validator';

export class EnsureProfileDto {
  @IsString()
  @IsOptional()
  @IsIn(['employee', 'vendor'])
  intendedRole?: 'employee' | 'vendor';
}

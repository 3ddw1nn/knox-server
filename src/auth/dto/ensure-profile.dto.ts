import { IsString, IsIn, IsNotEmpty } from 'class-validator';

export class EnsureProfileDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['employee', 'vendor'])
  intendedRole: string;
}

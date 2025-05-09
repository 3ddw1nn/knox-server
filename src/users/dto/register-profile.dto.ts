import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterProfileDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

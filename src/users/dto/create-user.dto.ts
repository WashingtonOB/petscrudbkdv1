import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha Fraca',
  })
  senha: string;
}

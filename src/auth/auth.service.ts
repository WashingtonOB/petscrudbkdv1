import {
    Injectable,
    NotAcceptableException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { compare, compareSync, hashSync } from 'bcrypt';
  import { User } from 'src/users/entities/user.entity';
  import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './costants';
  
  @Injectable()
  export class AuthService {
    constructor(
      private readonly usersService: UsersService,
      private jwtService: JwtService,
    ) {}
    async validarUsuario(cpf: string, senha: string): Promise<any> {
      const user = await this.usersService.findOneByCPF(cpf);
      if (!user) {
        throw new UnauthorizedException('Usuário ou Senha Inválidos!');
      }
      const isPasswordValid = await compareSync(senha, user.senha);
      if (isPasswordValid) {
        return await this.gerarToken(user);
      }
      throw new UnauthorizedException('Senha Inválida!');
    }
  
    async gerarToken(payload: User) {
      return {
        access_token: this.jwtService.sign(
          { cpf: payload.cpf },
          {
            secret: jwtConstants.secret,
            expiresIn: '3600s',
          },
        ),
      };
    }
  }
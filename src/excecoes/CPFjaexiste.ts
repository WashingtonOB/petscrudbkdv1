import { HttpException, HttpStatus } from '@nestjs/common';

export class cpfexisteja extends HttpException {
  constructor() {
    super('CPF/usuario, já existe!', HttpStatus.NOT_FOUND);
  }
}

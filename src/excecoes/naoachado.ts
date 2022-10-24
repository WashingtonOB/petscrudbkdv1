import { HttpException, HttpStatus } from '@nestjs/common';

export class RecordNotFoundException extends HttpException {
  constructor() {
    super('Registro não encontrado!', HttpStatus.NOT_FOUND);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository (Client)
    private clientRepository: Repository<Client>
  ) {  }

  async create(createClientDto: CreateClientDto) {
    return this.clientRepository.save(createClientDto);
  }
  async update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  async findAll() {
    return this.clientRepository.find();
  }

  async findOne(id: number) {
    return this.clientRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return this.clientRepository.delete(id);
  }


}

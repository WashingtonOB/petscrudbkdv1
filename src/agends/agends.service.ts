import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgendDto } from './dto/create-agend.dto';
import { UpdateAgendDto } from './dto/update-agend.dto';
import { Agend } from './entities/agend.entity';

@Injectable()
export class AgendsService {
  constructor(
    @InjectRepository(Agend)
    private agendRepository: Repository<Agend>
  ) { }

  async create(createAgendDto: CreateAgendDto) {
    return this.agendRepository.save(createAgendDto);
  }
  async update(id: number, updateAgendDto: UpdateAgendDto) {
    return this.agendRepository.update(id, updateAgendDto);
  }

  async findAll() {
    return this.agendRepository.find();
  }

  async findOne(id: number) {
    return this.agendRepository.findOneBy({ id: id });
  }

  async remove(id: number) {
    return this.agendRepository.delete(id);
  }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>
  ) { }
  
  create(createPetDto: CreatePetDto) {
    return this.petRepository.save(createPetDto);
  }
  update(id: number, updatePetDto: UpdatePetDto) {
    return this.petRepository.update(id, updatePetDto);
  }

  findAll() {
    return this.petRepository.find();
  }

  findOne(id: number) {
    return this.petRepository.findOneBy({ id: id });
  }

  remove(id: number) {
    return this.petRepository.delete(id);
  }


  /*
  create(createPetDto: CreatePetDto) {
    return 'This action adds a new pet';
  }

  findAll() {
    return `This action returns all pet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }

  */
}

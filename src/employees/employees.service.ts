import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ){}

  async create(createEmployeeDto: CreateEmployeeDto){
    return this.employeeRepository.save(createEmployeeDto);
  }

  async update(id: number, updateEmployeeDto : UpdateEmployeeDto){
    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  async findAll(){
    return this.employeeRepository.find();
  }

  async  findOne(id: number){
    return this.employeeRepository.findOneBy({ id: id });
  }

  async remove(id: number){
    return this.employeeRepository.delete(id);
  }

  
}

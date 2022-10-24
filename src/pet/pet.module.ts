import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { Pet } from './entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendsController } from 'src/agends/agends.controller';
import { AgendsService } from 'src/agends/agends.service';
import { Agend } from 'src/agends/entities/agend.entity';
import { ClientsController } from 'src/clients/clients.controller';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { EmployeesController } from 'src/employees/employees.controller';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Agend]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Employee]),
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([Pet]),

  ],
  controllers: [
    AgendsController,
    UsersController,
    EmployeesController,
    ClientsController,
    PetController
  ],
  providers: [
    AgendsService,
    UsersService,
    EmployeesService,
    ClientsService,
    PetService
  ]
})
export class PetModule {}

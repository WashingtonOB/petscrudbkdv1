import { Module } from '@nestjs/common';
import { AgendsService } from './agends.service';
import { AgendsController } from './agends.controller';
import { Agend } from './entities/agend.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Employee } from '../employees/entities/employee.entity';
import { Client } from '../clients/entities/client.entity';
import { Pet } from '../pet/entities/pet.entity';
import { UsersController } from '../users/users.controller';
import { EmployeesController } from '../employees/employees.controller';
import { ClientsController } from 'src/clients/clients.controller';
import { PetController } from '../pet/pet.controller';
import { UsersService } from '../users/users.service';
import { EmployeesService } from '../employees/employees.service';
import { ClientsService } from '../clients/clients.service';
import { PetService } from '../pet/pet.service';



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
export class AgendsModule { }

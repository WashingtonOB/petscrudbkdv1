import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendsController } from 'src/agends/agends.controller';
import { AgendsService } from 'src/agends/agends.service';
import { Agend } from 'src/agends/entities/agend.entity';
import { ClientsController } from 'src/clients/clients.controller';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { Pet } from 'src/pet/entities/pet.entity';
import { PetController } from 'src/pet/pet.controller';
import { PetService } from 'src/pet/pet.service';
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
export class EmployeesModule {}

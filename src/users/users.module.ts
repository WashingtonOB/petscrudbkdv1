import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AgendsController } from 'src/agends/agends.controller';
import { AgendsService } from 'src/agends/agends.service';
import { Agend } from 'src/agends/entities/agend.entity';
import { ClientsController } from 'src/clients/clients.controller';
import { ClientsService } from 'src/clients/clients.service';
import { Client } from 'src/clients/entities/client.entity';
import { EmployeesController } from 'src/employees/employees.controller';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';
import { Pet } from 'src/pet/entities/pet.entity';
import { PetController } from 'src/pet/pet.controller';
import { PetService } from 'src/pet/pet.service';

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
export class UsersModule {}

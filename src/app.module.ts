import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { EmployeesModule } from './employees/employees.module';
import { AgendsModule } from './agends/agends.module';
import { PetModule } from './pet/pet.module';
import { config } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';





@Module({
  imports: [
    UsersModule,
    ClientsModule,
    EmployeesModule,
    AgendsModule,
    PetModule,
    TypeOrmModule.forRoot(config),
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [
    AppController, 
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }

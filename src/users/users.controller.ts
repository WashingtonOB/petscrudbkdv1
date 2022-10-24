import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, DefaultValuePipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { validate } from 'class-validator';
import { PassportStrategy } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { BlockrotasGuard } from '../auth/blockrotas.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

 @UseGuards(BlockrotasGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(BlockrotasGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number =1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number=10,
    @Query('search') search: string
  ) {
    return this.usersService.findAll({page, limit}, search);
  }
  @UseGuards(BlockrotasGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @UseGuards(BlockrotasGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  /*
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(+id, updateUserDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
    }
    */
}

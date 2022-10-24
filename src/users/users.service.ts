import { cpfexisteja, RecordNotFoundException } from '@exceptions';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { use } from 'passport';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) { }

  async findOneByCPF(cpf: string, includePassowrd: boolean = false): Promise<User> {
    const user = await this.repository
      .createQueryBuilder("users")
      .addSelect("users.senha")
      .where("users.cpf = :cpf", { cpf })
      .getOne();


    if (includePassowrd === false) {
      return user;
    } else {
      const { senha, ...result } = user;
      return result as User;
    }
  }


  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = this.repository.create(createUserDto);
      const { senha, ...result } = await this.repository.save(user);
      return result as User;
    } catch (error) {
      throw new cpfexisteja();
    }

  }



  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.repository.update(id, updateUserDto);
    const user = await this.repository.findOneBy({ id: id });
    if (!user) {
      throw new RecordNotFoundException();
    }

    return user;
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<User>> {
    /*
    //não quiz funconar, esta dando erro direto!
    const where: FindOptionsWhere<User> = {};
    if (search) {
     where.nome = ILike(`%${search}%`);
    };
    return paginate<User>(this.repository, options, { where });
*/
    const pag = this.repository.createQueryBuilder('u');
    pag.orderBy('u.nome', 'DESC');

    return paginate<User>(pag, options);
  }

  async findOne(id: number): Promise<User> {
    const usuarios = await this.repository.findOneBy({ id: id });

    if (!usuarios) {
      throw new RecordNotFoundException();
    }

    return usuarios;
  }


  async remove(id: number): Promise<boolean> {
    const user = await this.repository.delete(id);

    if (!user?.affected) {
      throw new DOMException("Deu Ruuim!");
    }

    return true;
  }

  /*
    create(createUserDto: CreateUserDto) {
      return 'This action adds a new user';
    }
  
    findAll() {
      return `This action returns all users`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} user`;
    }
  
    update(id: number, updateUserDto: UpdateUserDto) {
      return `This action updates a #${id} user`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} user`;
    }
    */
}

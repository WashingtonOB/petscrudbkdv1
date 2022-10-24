import internal from "stream";
import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcrypt';

@Entity()
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column({ unique: true })
    cpf: string;

    @Column({ select: false })
    senha?: string;
  
    @BeforeInsert()
    hashPassword() {
      this.senha = hashSync(this.senha, 10);
    }
}

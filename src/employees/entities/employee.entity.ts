import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column({ unique: true })
    cpf: string;

    @Column({ unique: true })
    email: string;

    @Column()
    telefone: string;

}

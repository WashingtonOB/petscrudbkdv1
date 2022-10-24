import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
    @PrimaryGeneratedColumn('increment')   
    id: number;

    @Column()
    nome: string;

    @Column()
    tipo: string;

    @Column()
    idade: number;

    @Column({ unique: true })
    cpf_clinte: string;

    @Column()
    descricao: string;
}

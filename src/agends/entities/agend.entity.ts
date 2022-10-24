import { Type } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agend {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    cpf_cliente: string;

    @Column()
    cpf_veterinario: string;

    @Column()
    id_pet: number;
    
    @Type(() => Date)
    @Column('text')
    data: Date;

    @Column()
    descricao: string;

    @Column()
    valor: number;
}

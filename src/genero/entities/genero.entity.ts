import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_genero"})
export class Genero{

    @PrimaryGeneratedColumn()
    id_genero: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome_genero: string


}
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_plataforma"})
export class Plataforma{

    @PrimaryGeneratedColumn()
    id_plataforma: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome_plataforma: string

    @IsNotEmpty()
    @MaxLength(2000)
    @Column()
    image_plataforma: string


}
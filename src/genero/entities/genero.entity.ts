import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_genero"})
export class Genero{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_genero: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome_genero: string


}
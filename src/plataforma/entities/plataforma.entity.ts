import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_plataforma"})
export class Plataforma{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_plataforma: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome_plataforma: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(2000)
    @Column()
    image_plataforma: string


}
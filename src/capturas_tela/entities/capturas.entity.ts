import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_capturas_tela"})
export class Capturas{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_imagens: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(2000)
    @Column()
    imagem1: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(2000)
    @Column()
    imagem2: string

    

}
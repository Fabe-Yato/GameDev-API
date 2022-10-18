import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_jogos"})
export class Jogos{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(1000)
    @Column()
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @Column()
    preco: number

    @ApiProperty()
    @IsNotEmpty()
    @Column()
    avaliacao: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(5000)
    @Column()
    imagem: string

}
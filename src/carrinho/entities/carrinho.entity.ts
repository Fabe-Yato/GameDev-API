import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_carrinho"})
export class Carrinho{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_carrinho: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome_jogo: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(2000)
    @Column()
    imagem: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(2000)
    @Column()
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @Column()
    preco: number
}
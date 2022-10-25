import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import { Jogos } from 'src/jogos/entities/jogos.entity'
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm'

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

    @ManyToMany(() => Jogos, (jogos) => jogos.carrinho)
    @JoinTable()
    jogos: Jogos
}
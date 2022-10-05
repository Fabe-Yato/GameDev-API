import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: "tb_jogos"})
export class Jogos{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome: string

    @IsNotEmpty()
    @MaxLength(1000)
    @Column()
    descricao: string

    @IsNotEmpty()
    @Column()
    preco: number

    @IsNotEmpty()
    @Column()
    avaliacao: number

    @IsNotEmpty()
    @MaxLength(5000)
    @Column()
    imagem: string

}
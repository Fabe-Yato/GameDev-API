import { Jogos } from './../../jogos/entities/jogos.entity';
import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'

@Entity({name: "tb_usuarios"})
export class Usuario{

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_usuario: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column()
    nome_usuario: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(30)
    @Column()
    nascimento: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(12)
    @Column()
    CPF: string

    @ApiProperty()
    @IsNotEmpty()
    @Column()
    saldo_conta: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(100)
    @Column()
    email: string
    
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(50)
    @Column()
    senha: string

    @OneToMany(() => Jogos, (jogos) => jogos.id,{
        onDelete: "CASCADE"
    })
    jogos: Jogos
}
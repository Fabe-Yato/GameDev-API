import { Jogos } from './../../jogos/entities/jogos.entity';
import { ApiProperty } from '@nestjs/swagger'
import { MaxLength, IsNotEmpty } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm'

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

    
    @ManyToMany(() => Jogos, (jogos) => jogos.Plataforma)
    @JoinTable()
    jogos: Jogos

}
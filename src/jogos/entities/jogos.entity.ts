import { Capturas } from './../../capturas_tela/entities/capturas.entity';
import { Carrinho } from './../../carrinho/entities/carrinho.entity';
import { Plataforma } from './../../plataforma/entities/plataforma.entity';
import { Genero } from './../../genero/entities/genero.entity';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity({ name: 'tb_jogos' })
export class Jogos {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  @Column()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(5000)
  @Column()
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  preco: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column()
  avaliacao: number;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(5000)
  @Column()
  imagem: string;

  @OneToMany(() => Genero, (genero) => genero.jogos, {
    onDelete: 'CASCADE',
  })
  @ApiProperty({ type: () => Genero })
  genero: Genero;

  @ManyToMany(() => Plataforma, (plataforma) => plataforma.jogos)
  @JoinTable()
  @ApiProperty({ type: () => Plataforma })
  Plataforma: Plataforma;

  @ManyToMany(() => Carrinho, (carrinho) => carrinho.jogos)
  @JoinTable()
  @ApiProperty({ type: () => Carrinho })
  carrinho: Carrinho;

  @ManyToMany(() => Capturas, (capturas) => capturas.jogos)
  @JoinTable()
  @ApiProperty({ type: () => Capturas })
  capturas: Capturas;
}

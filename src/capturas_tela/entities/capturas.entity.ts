import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty } from 'class-validator';
import { Jogos } from 'src/jogos/entities/jogos.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'tb_capturas_tela' })
export class Capturas {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_imagens: number;

  @ApiProperty()
  @MaxLength(300)
  @Column()
  nome_jogo: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(2000)
  @Column()
  imagem1: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(2000)
  @Column()
  imagem2: string;

  @ManyToMany(() => Jogos, (jogos) => jogos.capturas)
  @JoinTable()
  @ApiProperty({ type: () => Jogos })
  jogos: Jogos;
}

import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty } from 'class-validator';
import { Jogos } from 'src/jogos/entities/jogos.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'tb_genero' })
export class Genero {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id_genero: number;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  @Column()
  nome_genero: string;

  @OneToMany(() => Jogos, (jogos) => jogos.genero, {
    onDelete: 'CASCADE',
  })
  @ApiProperty({ type: () => Jogos })
  jogos: Jogos;
}

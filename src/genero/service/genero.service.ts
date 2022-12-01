import { Genero } from './../entities/genero.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private GeneroRepository: Repository<Genero>,
  ) {}

  async findAll(): Promise<Genero[]> {
    return this.GeneroRepository.find({
      relations: {
        jogos: true,
      },
    });
  }

  async findById(id_genero: number): Promise<Genero> {
    const genero = await this.GeneroRepository.findOne({
      where: {
        id_genero,
      },
      relations: {
        jogos: true,
      },
    });
    if (!genero) {
      throw new HttpException('tarefa não encontrada', HttpStatus.NOT_FOUND);
    }
    return genero;
  }
  async create(genero: Genero): Promise<Genero> {
    return this.GeneroRepository.save(genero);
  }

  async update(genero: Genero): Promise<Genero> {
    const generoUpdate = await this.findById(genero.id_genero);

    if (!generoUpdate || !genero.id_genero) {
      throw new HttpException('Tarefa não encontrada', HttpStatus.NOT_FOUND);
    }
    return this.GeneroRepository.save(genero);
  }

  async delete(id: number): Promise<DeleteResult> {
    const generoDelete = await this.findById(id);

    if (!generoDelete)
      throw new HttpException(
        'O gênero não foi encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return this.GeneroRepository.delete(id);
  }
}

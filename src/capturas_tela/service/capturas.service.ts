import { Capturas } from './../entities/capturas.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class CapturasService {
  constructor(
    @InjectRepository(Capturas)
    private CapturasRepository: Repository<Capturas>,
  ) {}

  async findAll(): Promise<Capturas[]> {
    return this.CapturasRepository.find({
      relations: {
        jogos: true,
      },
    });
  }

  async findById(id_imagens: number): Promise<Capturas> {
    const Capturas = await this.CapturasRepository.findOne({
      where: {
        id_imagens,
      },
      relations: {
        jogos: true,
      },
    });
    if (!Capturas) {
      throw new HttpException('tarefa não encontrada', HttpStatus.NOT_FOUND);
    }
    return Capturas;
  }

  async create(capturas: Capturas): Promise<Capturas> {
    return this.CapturasRepository.save(capturas);
  }

  async update(Capturas: Capturas): Promise<Capturas> {
    const CapturasUpdate = await this.findById(Capturas.id_imagens);

    if (!CapturasUpdate || !Capturas.id_imagens) {
      throw new HttpException('Tarefa não encontrada', HttpStatus.NOT_FOUND);
    }
    return this.CapturasRepository.save(Capturas);
  }

  async delete(id: number): Promise<DeleteResult> {
    const capturasDelete = await this.findById(id);

    if (!capturasDelete)
      throw new HttpException(
        'Postagem não foi encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return this.CapturasRepository.delete(id);
  }
}

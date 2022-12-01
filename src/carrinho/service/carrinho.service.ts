import { Carrinho } from './../entities/carrinho.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, DeleteResult } from 'typeorm';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectRepository(Carrinho)
    private CarrinhoRepository: Repository<Carrinho>,
  ) {}

  async findAll(): Promise<Carrinho[]> {
    return this.CarrinhoRepository.find({
      relations: {
        jogos: true,
      },
    });
  }

  async findById(id_carrinho: number): Promise<Carrinho> {
    const Carrinho = await this.CarrinhoRepository.findOne({
      where: {
        id_carrinho,
      },
    });
    if (!Carrinho) {
      throw new HttpException(
        'O jogo não foi encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return Carrinho;
  }

  async findByNome(nome_jogo: string): Promise<Carrinho[]> {
    return this.CarrinhoRepository.find({
      where: {
        nome_jogo: ILike(`%${nome_jogo}%`),
      },
    });
  }

  async create(carrinho: Carrinho): Promise<Carrinho> {
    return this.CarrinhoRepository.save(carrinho);
  }

  async update(carrinho: Carrinho): Promise<Carrinho> {
    const CarrinhoUpdate = await this.findById(carrinho.id_carrinho);

    if (!CarrinhoUpdate || !carrinho.id_carrinho) {
      throw new HttpException(
        'O jogo não foi encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.CarrinhoRepository.save(carrinho);
  }
  async delete(id: number): Promise<DeleteResult> {
    const carrinhoDelete = await this.findById(id);

    if (!carrinhoDelete)
      throw new HttpException(
        'O jogo não foi encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return this.CarrinhoRepository.delete(id);
  }
}

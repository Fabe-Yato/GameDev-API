import { Jogos } from './../entities/jogos.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, DeleteResult } from 'typeorm';

@Injectable()
export class JogosService{
    constructor(
        @InjectRepository(Jogos)
        private JogosRepository: Repository<Jogos>
    ){}

    async findAll(): Promise<Jogos[]>{
        return this.JogosRepository.find({
            relations:{
                capturas: true,
                carrinho: true, 
                genero: true
            }
        })
    }

    async findById(id: number): Promise<Jogos>{
        let jogos = await this.JogosRepository.findOne({
            where:{
                id
            },
            relations:{
                Plataforma: true,
                capturas: true,
                genero: true,
                carrinho: true
            }
        })
        if(!jogos){
            throw new HttpException("tarefa não encontrada", HttpStatus.NOT_FOUND)
        }
        return jogos
    } 

    async findByNome(nome: string): Promise<Jogos[]>{
        return this.JogosRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
        })
    }

    async create(jogos: Jogos): Promise<Jogos>{
        return this.JogosRepository.save(jogos)
    }

    async update(jogos: Jogos): Promise<Jogos>{
        let jogosUpdate = await this.findById(jogos.id)

        if(!jogosUpdate || !jogos.id){
            throw new HttpException("Tarefa não encontrada",  HttpStatus.NOT_FOUND)
        }
        return this.JogosRepository.save(jogos)
    }

    async delete(id: number): Promise<DeleteResult> {

        let jogosDelete = await this.findById(id)

        if (!jogosDelete)
            throw new HttpException('Postagem não foi encontrada!', HttpStatus.NOT_FOUND)

        return this.JogosRepository.delete(id)

    }
}

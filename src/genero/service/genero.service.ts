import { Genero } from './../entities/genero.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class GeneroService{
    constructor(
        @InjectRepository(Genero)
        private GeneroRepository: Repository<Genero>
    ){}

    async findAll(): Promise<Genero[]>{
        return this.GeneroRepository.find()
    }

    async findById(id_genero: number): Promise<Genero>{
        let genero = await this.GeneroRepository.findOne({
            where:{
                id_genero
            },
            relations:{
                jogos: true
            }
        })
        if(!genero){
            throw new HttpException("tarefa não encontrada", HttpStatus.NOT_FOUND)
        }
        return genero
    } 

    async findByNome(nome_genero: string): Promise<Genero[]>{
        return this.GeneroRepository.find({
            where:{
                nome_genero: ILike(`%${nome_genero}%`)
            }
        })
    }

    async create(genero: Genero): Promise<Genero>{
        return this.GeneroRepository.save(genero)
    }

    async update(genero: Genero): Promise<Genero>{
        let generoUpdate = await this.findById(genero.id_genero)

        if(!generoUpdate || !genero.id_genero){
            throw new HttpException("Tarefa não encontrada",  HttpStatus.NOT_FOUND)
        }
        return this.GeneroRepository.save(genero)
    }
}

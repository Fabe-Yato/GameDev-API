import { Plataforma } from './../entities/plataforma.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class PlataformaService{
    constructor(
        @InjectRepository(Plataforma)
        private PlataformaRepository: Repository<Plataforma>
    ){}

    async findAll(): Promise<Plataforma[]>{
        return this.PlataformaRepository.find({
         relations:{
                jogos: true
                
            }
        })
    }

    async findById(id_plataforma: number): Promise<Plataforma>{
        let plataforma = await this.PlataformaRepository.findOne({
            where:{
                id_plataforma
            },
            relations:{
                jogos: true
            }
        })
        if(!plataforma){
            throw new HttpException("tarefa não encontrada", HttpStatus.NOT_FOUND)
        }
        return plataforma
    } 
    async create(plataforma: Plataforma): Promise<Plataforma>{
        return this.PlataformaRepository.save(plataforma)
    }

    async update(plataforma: Plataforma): Promise<Plataforma>{
        let plataformaUpdate = await this.findById(plataforma.id_plataforma)

        if(!plataformaUpdate || !plataforma.id_plataforma){
            throw new HttpException("Tarefa não encontrada",  HttpStatus.NOT_FOUND)
        }
        return this.PlataformaRepository.save(plataforma)
    }
}

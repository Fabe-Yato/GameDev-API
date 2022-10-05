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
        return this.PlataformaRepository.find()
    }

    async findById(id_plataforma: number): Promise<Plataforma>{
        let plataforma = await this.PlataformaRepository.findOne({
            where:{
                id_plataforma
            }
        })
        if(!plataforma){
            throw new HttpException("tarefa não encontrada", HttpStatus.NOT_FOUND)
        }
        return plataforma
    } 

    async findByNome(nome_plataforma: string): Promise<Plataforma[]>{
        return this.PlataformaRepository.find({
            where:{
                nome_plataforma: ILike(`%${nome_plataforma}%`)
            }
        })
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
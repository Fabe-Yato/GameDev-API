import { Usuario } from './../entities/usuario.entity';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(Usuario)
        private UsuarioRepository: Repository<Usuario>
    ){}

    async findAll(): Promise<Usuario[]>{
        return this.UsuarioRepository.find()
    }

    async findById(id_usuario: number): Promise<Usuario>{
        let Usuario = await this.UsuarioRepository.findOne({
            where:{
                id_usuario
            }
        })
        if(!Usuario){
            throw new HttpException("tarefa não encontrada", HttpStatus.NOT_FOUND)
        }
        return Usuario
    } 

    async findByNome(nome_usuario: string): Promise<Usuario[]>{
        return this.UsuarioRepository.find({
            where:{
                nome_usuario: ILike(`%${nome_usuario}%`)
            }
        })
    }

    async create(Usuario: Usuario): Promise<Usuario>{
        return this.UsuarioRepository.save(Usuario)
    }

    async update(usuario: Usuario): Promise<Usuario>{
        let UsuarioUpdate = await this.findById(usuario.id_usuario)

        if(!UsuarioUpdate || !usuario.id_usuario){
            throw new HttpException("Tarefa não encontrada",  HttpStatus.NOT_FOUND)
        }
        return this.UsuarioRepository.save(usuario)
    }
}
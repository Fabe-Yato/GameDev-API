import { UsuarioService } from './../service/usuario.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import { Usuario } from '../entities/usuario.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('/usuario')
export class UsuarioController{
    constructor(
        private readonly service: UsuarioService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Usuario []>{
        return this.service.findAll()
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Usuario []>{
        return this.service.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Usuario: Usuario): Promise<Usuario>{
        return this.service.create(Usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Usuario: Usuario): Promise<Usuario>{
        return this.service.update(Usuario)
    }
}
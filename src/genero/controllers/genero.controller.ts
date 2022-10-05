import { GeneroService } from './../service/genero.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import { Genero } from '../entities/Genero.entity';


@Controller('/genero')
export class GeneroController{
    constructor(
        private readonly service: GeneroService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Genero []>{
        return this.service.findAll()
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Genero []>{
        return this.service.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() genero: Genero): Promise<Genero>{
        return this.service.create(genero)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() genero: Genero): Promise<Genero>{
        return this.service.update(genero)
    }
}
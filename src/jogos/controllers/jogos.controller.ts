import { JogosService } from './../service/jogos.service';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import { Jogos } from '../entities/jogos.entity';


@Controller('/jogos')
export class JogosController{
    constructor(
        private readonly service: JogosService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Jogos []>{
        return this.service.findAll()
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome')nome: string): Promise<Jogos []>{
        return this.service.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() jogos: Jogos): Promise<Jogos>{
        return this.service.create(jogos)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() jogos: Jogos): Promise<Jogos>{
        return this.service.update(jogos)
    }
}
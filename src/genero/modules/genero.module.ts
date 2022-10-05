import { GeneroController } from './../controllers/genero.controller';
import { GeneroService } from './../service/genero.service';
import { Genero } from './../entities/genero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Genero])],
    providers: [GeneroService],
    controllers: [GeneroController],
    exports: [TypeOrmModule]

})
export class GeneroModule{}
import { JogosController } from './../controllers/jogos.controller';
import { JogosService } from './../service/jogos.service';
import { Jogos } from './../entities/jogos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    providers: [JogosService],
    controllers: [JogosController],
    exports: [TypeOrmModule]

})
export class JogosModule{}
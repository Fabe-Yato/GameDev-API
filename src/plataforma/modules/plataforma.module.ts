import { PlataformaController } from './../controllers/plataforma.controller';
import { PlataformaService } from './../service/plataforma.service';
import { Plataforma } from './../entities/plataforma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Plataforma])],
    providers: [PlataformaService],
    controllers: [PlataformaController],
    exports: [TypeOrmModule]

})
export class PlataformaModule{}
import { PlataformaModule } from './plataforma/modules/plataforma.module';
import { Plataforma } from './plataforma/entities/plataforma.entity';
import { Genero } from './genero/entities/genero.entity';
import { GeneroModule } from './genero/modules/genero.module';
import { JogosModule } from './jogos/modules/jogos.module';
import { Jogos } from './jogos/entities/jogos.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Fabitdb2114',
      database: "db_gamedev",
      entities: [Jogos, Genero, Plataforma],
      synchronize: true
    }),
    JogosModule,
    GeneroModule,
    PlataformaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

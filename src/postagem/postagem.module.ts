import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entities/postagem.entity';
import { PostagemService } from './services/postagem.service';
import { PostagemController } from './controllers/postagem.controller';
import { TemaModule } from '../tema/tema.module';
import { TemaService } from '../tema/service/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], //Adicionamos o TemaModule apenas no Postagem pois postagem é a tabela que possui o chave estrangeira
  providers: [PostagemService, TemaService], // Adicionamos o TemaService apenas no Postagem pois postagem é a tabela que possui o chave estrangeira
  controllers: [PostagemController],
  exports: [TypeOrmModule],
})
export class PostagemModule {} 
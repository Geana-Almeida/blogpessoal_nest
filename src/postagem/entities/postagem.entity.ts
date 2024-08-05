import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_postagens"})//ORM pega objeto e transforma em linguagem de banco de dados, e vice versa
export class Postagem{// Criando primaria autoincremental

    @ApiProperty()  
    @PrimaryGeneratedColumn()   //id int AUTOINCREMENT
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) //Bloquear apenas espacos em branco.
    @IsNotEmpty()
    @Column({length: 100, nullable: false}) //definir o tamanho e n aceitar numero
    @ApiProperty()  
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()  
    texto: string;

    @UpdateDateColumn()
    @ApiProperty()  
    data: Date;

    //Muitos para um, ou seja, Muitas postagens, possuem um tema CUIDADO CONFUNDIR ManyToOne com ManyToMany
    @ApiProperty({ type: () => Tema})  
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario})  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}
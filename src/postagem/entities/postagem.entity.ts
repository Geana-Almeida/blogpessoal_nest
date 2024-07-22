import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_postagens"})
export class Postagem{// Criando primaria autoincremental

    @PrimaryGeneratedColumn()   //id int AUTOINCREMENT
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false}) //definir o tamanho e n aceitar numero
    titulo: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    texto: string;

    @UpdateDateColumn()
    data: Date;


}
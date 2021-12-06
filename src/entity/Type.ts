import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Cryptocurrency } from "./Cryptocurrency";

@Entity()
export class Type {
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column("varchar", {
        nullable: false,
        unique: true
    })
    name: string;
    @Column("varchar", {
        nullable: true,
        length: 300
    })
    description: string;

    @OneToMany(() => Cryptocurrency, crypto => crypto.type)
    cryptos: Cryptocurrency[];
}
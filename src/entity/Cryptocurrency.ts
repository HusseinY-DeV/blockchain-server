import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { CryptoIndustry } from "./CryptoIndustry";
import { Type } from "./Type";

@Entity()
export class Cryptocurrency {

    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column("varchar", {
        nullable: false,
        unique: true
    })
    name: string;

    @ManyToOne(() => Type, type => type.cryptos)
    type: Type;

    @OneToMany(() => CryptoIndustry, CryptoIndustry => CryptoIndustry.crypto)
    public cryptoIndustry!: CryptoIndustry[];

}
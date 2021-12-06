import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CryptoIndustry } from "./CryptoIndustry";

@Entity()
export class Industry {
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column("varchar", {
        nullable: false,
        unique: true
    })
    name: string;

    @OneToMany(() => CryptoIndustry, CryptoIndustry => CryptoIndustry.industry)
    public cryptoIndustry!: CryptoIndustry[];
}
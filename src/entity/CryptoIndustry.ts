import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cryptocurrency } from "./Cryptocurrency";
import { Industry } from "./Industry";

@Entity()
export class CryptoIndustry {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    public industryId!: number;

    @Column()
    public cryptoId!: number;

    @Column("varchar", {
        length: 400
    })
    public reason: string;

    @ManyToOne(() => Cryptocurrency, crypto => crypto.cryptoIndustry)
    public crypto!: Cryptocurrency;

    @ManyToOne(() => Industry, industry => industry.cryptoIndustry)
    public industry!: Industry;
}
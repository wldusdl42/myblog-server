import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    num: number;

    @Column({ length: 10})
    id: string;

    @Column({ length: 20})
    passwd: string;

    @Column({ length: 50})
    token: string;
}
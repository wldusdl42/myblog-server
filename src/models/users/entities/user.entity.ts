import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    num: number;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 20 })
    passwd: string;

    @Column({ length: 1000 })
    retoken: string;

    @Column({ length: 20 })
    name: string;
}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login {
    @Column({ length: 10})
    user_id: string;

    @Column({ length: 20})
    user_password: string;
}
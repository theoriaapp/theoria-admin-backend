import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("sample")
export class SampleEntity {
    @PrimaryGeneratedColumn()
    id_sample: number;

    @Column()
    title: string;

    @Column()
    status: number;

    @Column()
    created_at: number;

    @Column()
    updated_at: number;

    @Column()
    deleted_at: number;
}


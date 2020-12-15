import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('logs')
class Log {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    image: string;

    @CreateDateColumn()
    // eslint-disable-next-line camelcase
    created_at: Date;

}

export default Log;

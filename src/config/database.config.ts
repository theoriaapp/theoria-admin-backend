import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();


export const DatabaseConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DATABASE || 'dbname',

  /** Attributes for entities */
  autoLoadEntities: true,
  synchronize: false,

  /** Attributes for migrations */
  migrationsTableName: 'migration',
  migrations: ['dist/db/migration/*{.ts,.js}'],
  migrationsRun: false,

  /**ORM Log */
  // logging: true,
  // logger: 'file'
};

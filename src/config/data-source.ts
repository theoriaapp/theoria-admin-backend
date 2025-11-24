import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

// Export DataSource for TypeORM CLI
export default new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DATABASE || 'dbname',
  
  synchronize: false,
  logging: false,
  
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migration/*{.ts,.js}'],
  migrationsTableName: 'migration',
});
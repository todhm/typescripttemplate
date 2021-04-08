import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['src/models/entities/**/*.ts'],
  migrations: ['src/models/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/models/entities',
    migrationsDir: 'src/models/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;

export const testConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_TEST_DB,
  synchronize: true,
  logging: false,
  dropSchema: true,
  entities: ['src/models/entities/**/*.ts'],
  migrations: ['src/models/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/models/entities',
    migrationsDir: 'src/models/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

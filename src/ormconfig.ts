import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  username: 'postgres',
  password: '123',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;

import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com',
  database: 'd24168pfsunsg7',
  port: 5432,
  username: 'skbdvypscidviy',
  password: 'f52bfcb439b05fe39dd52698aa082b7f8ad64af4964d40d05df694b316ca9b7b',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;

import ormconfing from 'src/ormconfig';

const ormseedconfig = {
  ...ormconfing,
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormseedconfig;

import { Figure } from 'src/figure/figure.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.host,
        port: parseInt(process.env.port),
        username: process.env.username,
        password: process.env.password,
        database: 'test',
        entities: [Figure],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

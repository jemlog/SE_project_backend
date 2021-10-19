"use strict";
const dotenv = require('dotenv');
dotenv.config();
module.exports = [
    {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '4321',
        database: 'typeorm_project_schema',
        synchronize: false,
        logging: true,
        entities: ['dist/src/entity/*.js'],
        migrationsTableName: 'se_migration_table',
        migrations: ['src/migration/*.ts'],
        subscribers: ['dist/src/subscriber/*.js'],
        cli: {
            entitiesDir: 'dist/src/entity',
            migrationsDir: 'src/migration',
            subscribersDir: 'dist/src/subscriber',
        },
    },
    {
        name: 'production',
        type: 'mysql',
        host: process.env.DB_HOST || '127.0.0.1',
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD,
        database: 'typeorm_project_schema',
        synchronize: true,
        logging: true,
        entities: ['dist/src/entity/*.js'],
        migrationsTableName: 'se_migration_table',
        migrations: ['src/migration/*.ts'],
        subscribers: ['dist/src/subscriber/*.js'],
        cli: {
            entitiesDir: 'dist/src/entity',
            migrationsDir: 'src/migration',
            subscribersDir: 'dist/src/subscriber',
        },
    },
];
//# sourceMappingURL=ormconfig.js.map
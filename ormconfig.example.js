require("dotenv/config");

module.exports = {
  type: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`./${process.env.NODE_ENV_FOLDER}/modules/**/entities/*.ts`],
  migrations: [
    `./${process.env.NODE_ENV_FOLDER}/shared/database/migrations/*.ts`,
  ],
  cli: {
    migrationsDir: `./${process.env.NODE_ENV_FOLDER}/shared/database/migrations`,
  },
};

require("dotenv/config");

const node_env_folder = process.env.NODE_ENV === "production" ? "dist" : "src";
const node_file_extension = process.env.NODE_ENV === "production" ? "js" : "ts";

module.exports = {
  type: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    `./${node_env_folder}/modules/**/entities/*.${node_file_extension}`,
  ],
  migrations: [
    `./${node_env_folder}/shared/database/migrations/*.${node_file_extension}`,
  ],
  cli: {
    migrationsDir: `./${node_env_folder}/shared/database/migrations`,
  },
};

import { Sequelize } from "sequelize";

const db = new Sequelize('rbac', 'root', '', {
    host: "127.0.0.1",
    port: 3311,
    dialect: "mysql"
});

export default db;
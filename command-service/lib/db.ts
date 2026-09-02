import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.MARIADB_HOST || "localhost",
  port: Number(process.env.MARIADB_PORT || 3306),
  user: process.env.MARIADB_USER || "root",
  password: process.env.MARIADB_PASSWORD || "",
  database: process.env.MARIADB_DATABASE || "autotrace",
  waitForConnections: true,
  connectionLimit: 10,
});

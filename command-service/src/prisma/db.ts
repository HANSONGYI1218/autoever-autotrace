import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import "dotenv/config";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: process.env.MARIADB_HOST!,
  port: Number(process.env.MARIADB_PORT!),
  user: process.env.MARIADB_USER!,
  password: process.env.MARIADB_PASSWORD!,
  database: process.env.MARIADB_DATABASE!,
});

export const db = new PrismaClient({ adapter });

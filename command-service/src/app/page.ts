import { db } from "../prisma/db";

async function main() {
  await db.$queryRaw`SELECT 1`;
  console.log("MariaDB 연결 성공!");
  await db.$disconnect();
}

main();

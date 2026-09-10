import { db } from "../prisma/db";

async function main() {
  await db.$connect();

  console.log("MongoDB 연결 성공!");
  await db.$disconnect();
}

main().catch((error) => {
  console.error("MongoDB 연결 실패:", error);
  process.exit(1);
});

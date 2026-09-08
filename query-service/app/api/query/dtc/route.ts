import { NextResponse } from "next/server";
import { db } from "../../../../src/prisma/db";

// GET - 전체 드라이버 조회
export async function GET() {
  try {
    const drivers = await db.driver.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(drivers);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "드라이버 조회에 실패했습니다." },
      { status: 500 },
    );
  }
}

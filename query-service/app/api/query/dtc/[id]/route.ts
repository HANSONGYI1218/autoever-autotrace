import { NextResponse } from "next/server";
import { db } from "../../../../../src/prisma/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const driver = await db.driver.findUnique({
      where: {
        id,
      },
    });

    if (!driver) {
      return NextResponse.json(
        { message: "드라이버를 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    return NextResponse.json(driver);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "드라이버 조회에 실패했습니다." },
      { status: 500 },
    );
  }
}

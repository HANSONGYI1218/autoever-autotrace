import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../src/prisma/db";

// POST - 사용자 등록
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { id, name, licenseNo, phone } = body;

    if (!id || !name) {
      return NextResponse.json(
        { message: "필수 값이 없습니다." },
        { status: 400 },
      );
    }

    const result = await db.driver.create({
      data: {
        id,
        name,
        licenseNo,
        phone,
      },
    });

    return NextResponse.json(
      {
        message: "사용자가 등록되었습니다.",
        result,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "사용자 등록에 실패했습니다." },
      { status: 500 },
    );
  }
}

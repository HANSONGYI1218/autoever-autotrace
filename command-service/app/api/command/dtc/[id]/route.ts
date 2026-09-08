import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../src/prisma/db";

// PATCH - 특정 사용자 정보 변경
export async function PATCH(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  },
) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const { name, licenseNo, phone } = body;

    const result = await db.driver.update({
      where: {
        id,
      },
      data: {
        ...(name !== undefined && { name }),
        ...(licenseNo !== undefined && { licenseNo }),
        ...(phone !== undefined && { phone }),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      message: "사용자 정보 변경에 성공했습니다.",
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "사용자 정보 변경에 실패했습니다." },
      { status: 500 },
    );
  }
}

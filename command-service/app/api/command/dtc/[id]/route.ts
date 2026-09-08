import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../src/prisma/db";

// PATCH - 고장코드 처리 완료
export async function PATCH(
  request: NextRequest,
  context: {
    params: Promise<{ id: string }>;
  },
) {
  try {
    const { id } = await context.params;

    const result = await db.$executeRaw`
        UPDATE dtc_events
        SET status = 'RESOLVED'
        WHERE id = ${id}
        `;

    return NextResponse.json({
      message: "고장코드가 처리 완료되었습니다.",
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "고장코드 처리에 실패했습니다." },
      { status: 500 },
    );
  }
}

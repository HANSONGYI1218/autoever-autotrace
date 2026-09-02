import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

// GET - 전체 고장코드 조회
export async function GET() {
  try {
    const dtcEvents = await db
      .collection("dtc_events")
      .find({})
      .sort({ occurredAt: -1 })
      .toArray();

    return NextResponse.json(dtcEvents);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "고장 코드 조회에 실패했습니다." },
      { status: 500 },
    );
  }
}

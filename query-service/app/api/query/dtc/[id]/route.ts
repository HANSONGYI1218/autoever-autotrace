import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const dtc = await db.collection("dtc_events").findOne({
      _id: new ObjectId(id),
    });

    if (!dtc) {
      return NextResponse.json(
        { message: "DTC를 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    return NextResponse.json(dtc);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "DTC 조회에 실패했습니다." },
      { status: 500 },
    );
  }
}

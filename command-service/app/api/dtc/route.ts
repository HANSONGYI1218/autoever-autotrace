import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db";

// POST - 고장코드 등록
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { vehicleId, vehicleModel, dtcCode, description, severity } = body;

    if (!vehicleId || !vehicleModel || !dtcCode || !description || !severity) {
      return NextResponse.json(
        { message: "필수 값이 없습니다." },
        { status: 400 },
      );
    }

    const [result] = await db.execute(
      `
      INSERT INTO dtc_events
      (
        vehicle_id,
        vehicle_model,
        dtc_code,
        description,
        severity,
        status,
        occurred_at
      )
      VALUES (?, ?, ?, ?, ?, 'ACTIVE', NOW())
      `,
      [vehicleId, vehicleModel, dtcCode, description, severity],
    );

    return NextResponse.json(
      {
        message: "고장코드가 등록되었습니다.",
        result,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "고장코드 등록에 실패했습니다." },
      { status: 500 },
    );
  }
}

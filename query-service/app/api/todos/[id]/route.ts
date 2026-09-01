import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";

// GET - 부분 조회
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);

  return NextResponse.json(rows);
}

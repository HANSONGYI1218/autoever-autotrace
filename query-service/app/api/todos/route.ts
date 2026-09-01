import { NextResponse } from "next/server";
import { db } from "../../../lib/db";

// GET - 전체 조회
export async function GET() {
  const [rows] = await db.query("SELECT * FROM todos");

  return NextResponse.json(rows);
}

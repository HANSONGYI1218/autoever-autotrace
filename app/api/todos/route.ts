import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET - 전체 조회
export async function GET() {
  const [rows] = await db.query("SELECT * FROM todos");

  return NextResponse.json(rows);
}

// POST - Todo 추가
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title) {
      return NextResponse.json(
        { message: "title은 필수입니다." },
        { status: 400 },
      );
    }

    const [result] = await db.execute(
      "INSERT INTO todos (title, completed) VALUES (?, ?)",
      [body.title, body.completed ?? false],
    );

    return NextResponse.json(
      {
        message: "Todo 추가",
        data: {
          id: (result as { insertId: number }).insertId,
          title: body.title,
          completed: body.completed ?? false,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Todo 추가 실패" }, { status: 500 });
  }
}

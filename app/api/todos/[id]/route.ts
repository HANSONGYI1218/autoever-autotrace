import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// PUT - Todo 수정
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const [result] = await db.execute(
      "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
      [body.title, body.completed ?? false, id],
    );

    const affectedRows = (result as { affectedRows: number }).affectedRows;

    if (affectedRows === 0) {
      return NextResponse.json(
        { message: "Todo를 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Todo 수정",
      id,
      data: {
        title: body.title,
        completed: body.completed ?? false,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Todo 수정 실패" }, { status: 500 });
  }
}

// DELETE - Todo 삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const [result] = await db.execute("DELETE FROM todos WHERE id = ?", [id]);

    const affectedRows = (result as { affectedRows: number }).affectedRows;

    if (affectedRows === 0) {
      return NextResponse.json(
        { message: "Todo를 찾을 수 없습니다." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Todo 삭제",
      id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Todo 삭제 실패" }, { status: 500 });
  }
}

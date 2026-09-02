import { DtcEvent } from "@/types/dtc";

// GET
export async function getDtcEvents(): Promise<DtcEvent[]> {
  const response = await fetch(`/api/query/dtc`);

  if (!response.ok) {
    throw new Error("DTC 조회 실패");
  }

  return response.json();
}

// POST
export async function createDtc(data: {
  vehicleId: string;
  vehicleModel: string;
  dtcCode: string;
  description: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
}) {
  const response = await fetch(`/api/command/dtc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("DTC 등록 실패");
  }

  return response.json();
}

// UPDATE
export async function updateDtc(
  id: number,
  data: {
    vehicleId?: string;
    vehicleModel?: string;
    dtcCode?: string;
    description?: string;
    severity?: "LOW" | "MEDIUM" | "HIGH";
  },
) {
  const response = await fetch(`/api/command/dtc/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("DTC 수정 실패");
  }

  return response.json();
}

// DELETE
export async function deleteDtc(id: number) {
  const response = await fetch(`/api/command/dtc/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("DTC 삭제 실패");
  }

  return response.json();
}

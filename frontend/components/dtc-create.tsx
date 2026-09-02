"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createDtc } from "@/api/dtc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DtcCreate() {
  const router = useRouter();

  const [vehicleId, setVehicleId] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [dtcCode, setDtcCode] = useState("");
  const [description, setDescription] = useState("");

  const [severity, setSeverity] = useState<"LOW" | "MEDIUM" | "HIGH">("LOW");

  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!vehicleId || !vehicleModel || !dtcCode || !description) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      await createDtc({
        vehicleId,
        vehicleModel,
        dtcCode,
        description,
        severity,
      });

      alert("DTC가 등록되었습니다.");

      router.push("/dtc");
    } catch (error) {
      console.error(error);
      alert("DTC 등록에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>DTC 등록</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="차량 ID"
          value={vehicleId}
          onChange={(e) => setVehicleId(e.target.value)}
        />

        <Input
          placeholder="차량 모델"
          value={vehicleModel}
          onChange={(e) => setVehicleModel(e.target.value)}
        />

        <Input
          placeholder="고장코드"
          value={dtcCode}
          onChange={(e) => setDtcCode(e.target.value)}
        />

        <Input
          placeholder="고장 설명"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={severity}
          onChange={(e) =>
            setSeverity(e.target.value as "LOW" | "MEDIUM" | "HIGH")
          }
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <Button onClick={handleCreate} disabled={loading} className="w-full">
          {loading ? "등록 중..." : "등록"}
        </Button>
      </CardContent>
    </Card>
  );
}

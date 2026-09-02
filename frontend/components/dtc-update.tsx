"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { updateDtc } from "@/api/dtc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DtcUpdateProps {
  id: number;
}

export default function DtcUpdate({ id }: DtcUpdateProps) {
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<"LOW" | "MEDIUM" | "HIGH">("LOW");

  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await updateDtc(id, {
        description,
        severity,
      });

      alert("DTC가 수정되었습니다.");

      router.push("/dtc");
    } catch (error) {
      console.error(error);
      alert("DTC 수정에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>DTC 수정</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">수정 대상 DTC ID: {id}</p>

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

        <Button onClick={handleUpdate} disabled={loading} className="w-full">
          {loading ? "수정 중..." : "수정"}
        </Button>
      </CardContent>
    </Card>
  );
}

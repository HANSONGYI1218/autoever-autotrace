"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { deleteDtc } from "@/api/dtc";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DtcDeleteProps {
  id: number;
}

export default function DtcDelete({ id }: DtcDeleteProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(`${id}번 DTC를 삭제하시겠습니까?`);

    if (!confirmed) {
      return;
    }

    try {
      setLoading(true);

      await deleteDtc(id);

      alert("DTC가 삭제되었습니다.");

      router.push("/dtc");
    } catch (error) {
      console.error(error);
      alert("DTC 삭제에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>DTC 삭제</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p>
          삭제할 DTC ID: <span className="font-bold">{id}</span>
        </p>

        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={loading}
          className="w-full"
        >
          {loading ? "삭제 중..." : "삭제"}
        </Button>
      </CardContent>
    </Card>
  );
}

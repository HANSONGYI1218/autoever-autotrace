"use client";

import { getDtcEvents } from "@/api/dtc";
import type { DtcEvent } from "@/types/dtc";
import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

export default function DtcList() {
  const [events, setEvents] = useState<DtcEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getDtcEvents();
        setEvents(data);
      } catch (error) {
        console.error("DTC 조회 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>차량 고장코드 이력 리스트</CardTitle>
      </CardHeader>

      <CardContent>
        {loading ? (
          <p>조회 중...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>차량 ID</TableHead>
                <TableHead>차량 모델</TableHead>
                <TableHead>고장코드</TableHead>
                <TableHead>설명</TableHead>
                <TableHead>심각도</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.vehicleId}</TableCell>
                  <TableCell>{event.vehicleModel}</TableCell>
                  <TableCell>{event.dtcCode}</TableCell>
                  <TableCell>{event.description}</TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        event.severity === "HIGH"
                          ? "destructive"
                          : event.severity === "MEDIUM"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {event.severity}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

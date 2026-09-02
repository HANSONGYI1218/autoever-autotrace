// frontend/types/dtc.ts

export type DtcSeverity = "LOW" | "MEDIUM" | "HIGH";

export type DtcStatus = "ACTIVE" | "RESOLVED";

export interface DtcEvent {
  id: number;
  vehicleId: string;
  vehicleModel: string;
  dtcCode: string;
  description: string;
  severity: DtcSeverity;
  status: DtcStatus;
  occurredAt: string;
}

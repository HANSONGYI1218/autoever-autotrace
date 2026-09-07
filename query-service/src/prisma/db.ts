import mongo from "@prisma/orm-mongo/runtime";
import "dotenv/config";
import type { Contract } from "./contract.d";
import contractJson from "./contract.json" with { type: "json" };

export const db = mongo<Contract>({
  contractJson,
  url: process.env["DATABASE_URL"]!,
});

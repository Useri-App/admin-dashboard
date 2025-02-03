import { farmTypeColors } from "./eums";

export type FarmType = {
  id: string;
  farmer_id: string;
  name: string;
  description: string;
  location: string;
  type: "poultry" | "crop";
  farm_size_id: string;
};
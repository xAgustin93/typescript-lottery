import { obtainParticipants } from "./";

export function totalParticipants(): number {
  const response = obtainParticipants();
  return response.length;
}

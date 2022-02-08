import fs from "fs";
import { obtainParticipants } from "./";
import { IUser } from "../models";

type User = {
  username: string;
  email: string;
};

export function registerUser(user: User): void {
  const newParticipant: IUser = {
    ...user,
    date: new Date(),
  };

  const participants = obtainParticipants();
  participants.push(newParticipant);

  const data = JSON.stringify(participants);

  fs.writeFileSync("participants.json", data);
}

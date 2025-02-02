"use server";
import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";

export const useServerSession = async () => {
  const session = await getServerSession(authConfig);
  return session;
};

"use server";

import { auth } from "../../auth";
import { db } from "@/lib/db";

export const listDeviceAct = async (
  page: number,
  limit: number,
  name: string,
  code: string,
  city: string,
  status: boolean) => {
  // valida se o usuário esta logado, se é admin ou se esta em desenvolvimento
  const session = await auth();

  if ((!session || session?.user.role !== "ADMIN") && process.env.NODE_ENV !== "development") {
    return { error: "Usuário não autorizado!", data: null };
  }

  try {
    // busca os dispositivos
    const devices = await db.device.findMany({
      where: {
        OR: [
          { name: { contains: name, mode: "insensitive" } },
          { code: { contains: code, mode: "insensitive" } },
          { city: { contains: city, mode: "insensitive" } },
          { active: status }
        ]
      },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc"
      }
    });

    return { error: null, data: devices };
  } catch (error) {
    console.log("🔴 Erro ao buscar dispositivos!", error);
    return { error: "Erro ao buscar dispositivos!", data: null };
  }
}

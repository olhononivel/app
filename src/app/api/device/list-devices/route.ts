
import { listDeviceAct } from "../../../../../actions/device/listDeviceAct";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { page, limit, name, code, city, status } = await req.json();
    const response = await listDeviceAct(page, limit, name, code, city, status);

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
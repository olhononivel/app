import { NextResponse } from "next/server";
import { saveDataDeviceAction } from "../../../../../actions/device/saveDataDeviceAct";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await saveDataDeviceAction(body);
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}

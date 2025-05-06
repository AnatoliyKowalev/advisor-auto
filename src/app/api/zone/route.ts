import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const x = searchParams.get("x");
  const y = searchParams.get("y");
  const serverId = searchParams.get("serverId");

  try {
    const res = await fetch(
      `https://map.minecraft-galaxy.ru/zoneinfo/?w=${serverId}&x=${x}&y=${y}`
    );
    const encoded = await res.text();

    // ✅ Decode base64 and parse JSON
    const decoded = Buffer.from(encoded, "base64").toString("utf-8");

    const json = JSON.parse(decoded);

    return NextResponse.json(json); // send it as JSON response
  } catch (error) {
    console.error("Error fetching or decoding zone info:", error);
    return NextResponse.json(
      { error: "Unable to fetch zone info" },
      { status: 500 }
    );
  }
}

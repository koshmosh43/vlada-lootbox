import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch the image" }, { status: response.status });
    }

    const buffer = await response.arrayBuffer();

    const headers = new Headers();
    const contentType = response.headers.get("Content-Type") || "application/octet-stream";
    headers.set("Content-Type", contentType);
    // Add CORS
    headers.set("Access-Control-Allow-Origin", "*");

    return new NextResponse(buffer, { headers });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
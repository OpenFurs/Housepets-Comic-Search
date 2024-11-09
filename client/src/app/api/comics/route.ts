import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const urlParams = new URL(request.url).searchParams

  // Mock API, will add data later
  return NextResponse.json({
    message: "I love orange"
  })
}

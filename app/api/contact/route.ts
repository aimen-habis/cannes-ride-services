import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_MAP = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  // Rate limiting
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);
  if (entry) {
    if (now - entry.timestamp < RATE_LIMIT_WINDOW) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Too many requests" },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      entry.count = 1;
      entry.timestamp = now;
    }
  } else {
    RATE_LIMIT_MAP.set(ip, { count: 1, timestamp: now });
  }

  try {
    const body = await request.json();
    const { name, phone, email, date, pickup, destination, passengers, message } = body;

    if (!name || !phone || !date || !pickup || !destination) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, you could send an email, save to DB, etc.
    // For now, return success — the frontend handles WhatsApp redirect
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const request = await fetch(process.env.SERVER_URL + `/api/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) {
    return NextResponse.json({ error: await request.text() }, { status: 500 });
  }

  return NextResponse.json(await request.json(), { status: 200 });
};

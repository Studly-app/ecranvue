import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json();

  const request = await fetch(process.env.SERVER_URL + `/api/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) {
    return new Response("il y a une erreur dans le serveur", { status: 500 });
  }

  return new Response(JSON.stringify(await request.json()), {
    status: 200,
  });
};

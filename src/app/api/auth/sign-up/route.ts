import { NextRequest, NextResponse } from "next/server";
import BASE_API_URL from "../..";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const response = await fetch(`${BASE_API_URL}/auth/sign-up`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(body),
        });

        const data = await response.json();
        console.log(data);

        const res = NextResponse.json(data, { status: response.status });

        return res;
    } catch (error) {
        console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
    }
}
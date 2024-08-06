import User from "@/models/user";
import bcryptjs from "bcryptjs";
import Connection from "@/database/config";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
// import { useRouter } from "next/navigation";

Connection();

export const GET = async (NextRequest) => {
  try {
    const response = NextResponse.json({
      message: "logout succesfull",
      success: true,
    });

    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};

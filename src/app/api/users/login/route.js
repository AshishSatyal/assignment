import User from "@/models/user";
import bcryptjs from "bcryptjs";
import Connection from "@/database/config";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
// import { useRouter } from "next/navigation";

Connection();

export const POST = async (NextRequest) => {
  console.log(process.env.JWT_SECRETKEY);

  try {
    const body = await NextRequest.json();

    const { email, password } = body;

    if (!email || !password) {
      return new Response(" email and password is required", {
        status: 401,
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return new Response("email doesnot exist", { status: 400 });
    }
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return new Response("password Incorrect", { status: 400 });
    }
    const tokenData = {
      fullname: user.fullname,
      id: user._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({ message: "login succesfull" });

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });
    return response;
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};

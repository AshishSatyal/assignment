import User from "@/models/user";
import bcryptjs from "bcryptjs";
import Connection from "@/database/config";

Connection();

export const POST = async (NextRequest) => {
  try {
    const body = await NextRequest.json();
    // console.log("body", body);

    const { fullname, email, password } = body;

    if (!fullname || !email || !password) {
      return new Response("name, email and password is required", {
        status: 401,
      });
    }
    const user = await User.findOne({ email });

    if (user) {
      return new Response("email already exist", { status: 400 });
    }
    const salt = await bcryptjs.genSalt(12);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return new Response("user saved succesfully", { status: 200 });
  } catch (error) {
    console.log(error);
  }
};

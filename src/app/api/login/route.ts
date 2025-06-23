import { UserModel } from "@/modules/models/userModels";
import { connectMongo } from "@/modules/mongodb";
import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectMongo();
  const { email, password } = (await request.json()) as LoginTypeSchema;

  if (!email || !password) {
    return Response.json(message.PARAMS_INVALID);
  }

  try {
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return NextResponse.json(
        {
          error: message.EMAIL_INVALID_REGISTER,
        },
        {
          status: 400,
        }
      );
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return Response.json(message.CREDENTIALS_INVALID);
    }

    NextResponse.next().cookies.set("TOKEN", "sasa");
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return Response.json(message.CONECTION_FAILED_MONGODB);
  }
}

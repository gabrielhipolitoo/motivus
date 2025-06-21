import { UserModel } from "@/modules/models/userModels";
import { connectMongo } from "@/modules/mongodb";
import { createTypeUserInputSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, name, password, permission } = await request.json();

  if (!email || !password || !name || !permission) {
    return NextResponse.json(
      {
        message: message.PARAMS_INVALID,
      },
      { status: 400 }
    );
  }

  try {
    await connectMongo();
    const emailExist = await UserModel.findOne({ email });
    const lengthDocument = await UserModel.countDocuments();
    if (emailExist) {
      return NextResponse.json(
        {
          message: message.EMAIL_INVALID_REGISTER,
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new UserModel({
      email,
      name,
      password: hashedPassword,
      permission,
      _id: lengthDocument + 1,
    });

    await newUser.save();
    return NextResponse.json(
      {
        message: message.SUCESS_CREATE_REGISTER,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: error?.message,
      },
      {
        status: 500,
      }
    );
  }
}

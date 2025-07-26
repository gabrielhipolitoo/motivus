import { UserModel } from "@/modules/models/userModels";
import { connectMongo } from "@/modules/mongodb";
import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectMongo();

  const { email, password } = (await request.json()) as LoginTypeSchema;

  try {
  } catch (error) {
    console.log(error);
    return Response.json(message.CONECTION_FAILED_MONGODB);
  }
}

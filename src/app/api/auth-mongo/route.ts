import client from "@/modules/mongodb";
import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";
import bcrypt from "bcryptjs";

const MONGODB_NAME = process.env.MONGODB_NAME;
export async function POST(request: Request) {
  const body = (await request.json()) as LoginTypeSchema;

  if (!MONGODB_NAME) {
    return Response.json(message.ERROR_MONGODB_EMPTY_ENV);
  }
  if (!body.email || !body.password) {
    return Response.json(message.loginError);
  }

  const checkPassword = await bcry;

  try {
    await client.connect();
    const user = client.db(MONGODB_NAME);
    const email = await user.collection("users").findOne({ email: body.email });

    if (!email) {
      return Response.json(message.EMAIL_INVALID);
    }

    return Response.json({ email });
  } catch (error) {
    console.log(error);
    return Response.json(message.CONECTION_FAILED_MONGODB);
  }
}

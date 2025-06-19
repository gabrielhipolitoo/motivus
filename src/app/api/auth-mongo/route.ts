import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";

export async function POST(request: Request) {
  const data = (await request.json()) as LoginTypeSchema;
  const { email, password } = data;
  if (!email || !password) {
    return Response.json(message.loginError);
  }

  return Response.json(data);
}

import client from "@/modules/mongodb";
import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";

export async function GET(request: Request) {
  try {
    await client.connect();
    const dbmovies = client.db("sample_mflix");
    const movies = await dbmovies
      .collection("movies")
      .find({})
      .sort({
        metacritic: -1,
      })
      .limit(10)
      .toArray();
    
    return Response.json({movies})
  } catch (error) {
    console.log(error);
    return Response.json(message.CONECTION_FAILED_MONGODB);
  }
}

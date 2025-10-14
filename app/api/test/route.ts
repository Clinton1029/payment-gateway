// app/api/test/route.ts
import prisma from "@/lib/dbConnect";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json({ success: true, users });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}

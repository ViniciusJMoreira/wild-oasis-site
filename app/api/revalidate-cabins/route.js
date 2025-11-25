import { revalidatePath } from "next/cache";

export async function POST() {
  try {
    revalidatePath("/cabins"); // revalida toda a página de cabines
    return Response.json({ revalidated: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

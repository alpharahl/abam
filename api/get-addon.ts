import {createClient} from "@/utils/supabase/client";

export const useGetAddon = (id: string) => {
  const client = createClient();
  return async () => {
    const {error, data} = await client
      .from("addons")
      .select()
      .eq("id", id)
      .single()
    if (error) {
      console.error("Error loading addon data");
      throw new Error(error.message);
    }
    return data;
  }
}
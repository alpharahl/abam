import {createClient} from "@/utils/supabase/client";

export const getAddons = async () => {
  const client = createClient();
  const {error, data} = await client
    .from("addons")
    .select()
  if (error) {
    console.error("Error loading addon data");
    throw new Error(error.message);
  }
  return data
}
import supabase from "./supabase";

export async function getGroups() {
  const { data, error } = await supabase.from("groups").select("*");

  if (error) throw new Error("Groups could not be loaded");

  return data;
}

export async function createGroup(newGroup) {
  const { data, error } = await supabase.from("groups").insert([newGroup]);

  if (error) throw new Error("Group could not be created");

  return data;
}

export async function getGroup(id) {
  const { data, error } = await supabase
    .from("groups")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Group could not be found");
  }

  return data;
}

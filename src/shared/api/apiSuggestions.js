import supabase from "./supabase";

export async function createSuggestion(newSuggestion) {
  const { data, error } = await supabase
    .from("suggestions")
    .insert({ ...newSuggestion });

  if (error) throw new Error("Could not add a film");

  return data;
}

export async function getSuggestions() {
  const { data, error } = await supabase.from("suggestions").select("*");

  if (error) {
    console.error(error);
    throw new Error("No suggestions could be found");
  }

  return data;
}

export async function getSuggestion(id) {
  const { data, error } = await supabase
    .from("suggestions")
    .select("*")
    .eq("group_id", id);

  if (error) {
    throw new Error("Group could not be found");
  }

  return data;
}

export async function deleteSuggestion(id) {
  const { data, error } = await supabase
    .from("suggestions")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Film could not be deleted");
  }
  return data;
}

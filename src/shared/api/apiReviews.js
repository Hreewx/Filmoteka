import supabase from "./supabase";

export async function createReview(newReview) {
  const { data, error } = await supabase
    .from("reviews")
    .insert({ ...newReview });

  if (error) throw new Error("Review could not be created");

  return data;
}

export async function getReviews() {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) throw new Error("Reviews could not be loaded");

  return data;
}

export async function getReviewsByGroupId(id) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("group_id", id);

  if (error) {
    throw new Error("Review could not be found");
  }

  return data;
}

export async function deleteReview(id) {
  const { data, error } = await supabase.from("reviews").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Review could not be deleted");
  }
  return data;
}

import { PAGE_SIZE } from "../utils/helpers";
import supabase from "./supabase";

export async function createReview(newReview) {
  const { data, error } = await supabase.from("reviews").insert([newReview]);

  if (error) throw new Error("Review could not be created");

  return data;
}

export async function getReviews() {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) throw new Error("Reviews could not be loaded");

  return data;
}

export async function getReviewsByGroupId(id, { sortBy, page }) {
  let query = supabase
    .from("reviews")
    .select("*", { count: "exact" })
    .eq("group_id", id);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) throw new Error("Reviews could not be found");

  return { data, count };
}

export async function getReviewById(id) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("id", id);

  if (error) return new Error("Review with this id could not be found");

  return data;
}

export async function deleteReview(id) {
  const { data, error } = await supabase.from("reviews").delete().eq("id", id);

  if (error) throw new Error("Обзор не может быть удален");

  return data;
}

export async function updateReview(id, obj) {
  const { data, error } = await supabase
    .from("reviews")
    .update(obj)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Произошла ошибка при обновлении обзора");
  }
  return data;
}

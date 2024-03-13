import supabase from "./supabase";

export async function getProfileName(login) {
  const { data, error } = await supabase
    .from("profile")
    .select("login, id")
    .ilike("login", `%${login}%`);

  if (error) throw new Error("No user with this login");

  return data;
}

export async function getAllNames() {
  const { data, error } = await supabase.from("profile").select("*");

  if (error) throw new Error("Names could not be loaded");

  return data;
}

export async function createGroupMembers(members) {
  const { data, error } = await supabase
    .from("group_members")
    .insert([...members]);

  if (error) throw new Error("Something went wrong adding users");

  return data;
}

export async function getGroupMembersByGroupId(id) {
  const { data, error } = await supabase
    .from("group_members")
    .select("id, login, iq, profile_fk")
    .eq("groups_fk", id);

  if (error) throw new Error("Group members could not be loaded");

  return data;
}

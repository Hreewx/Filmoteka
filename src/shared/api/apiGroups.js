import supabase from "./supabase";

export async function getGroups() {
  const { data, error } = await supabase.from("groups").select("*");

  if (error) throw new Error("Groups could not be loaded");

  return data;
}

export async function createGroup(newGroup) {
  const { data, error } = await supabase.from("groups").insert(newGroup);

  if (data && data.length > 0) {
    const createdId = data[0].id;
    console.log(createdId);
    return data;
  } else if (error) {
    throw new Error("Group could not be created");
  }
}

export async function createGroupWithMembers(newGroup, members) {
  // Создаем запись в таблице "groups" и получаем ее id
  const { data: groupData, error: groupError } = await supabase
    .from("groups")
    .insert([newGroup])
    .select();

  if (groupError) {
    throw new Error("Ошибка при создании группы");
  }

  const groupId = groupData[0].id;

  // Создаем массив объектов для вставки в таблицу "group_members" с корректными ссылками на созданную группу
  const membersData = members.map((member) => {
    return { ...member, groups_fk: groupId };
  });
  console.log(membersData);

  // Вставляем связанные записи в таблицу "group_members"
  const { data: membersInsertData, error: membersInsertError } = await supabase
    .from("group_members")
    .insert([...membersData]);

  if (membersInsertError) {
    throw new Error("Ошибка при создании участников группы");
  }

  return { groupId, membersInsertData };
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

export async function deleteGroup(id) {
  const { data, error } = await supabase.from("groups").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Group could not be deleted");
  }
  return data;
}

export async function getGroupsMembers() {
  const { data, error } = await supabase
    .from("groups")
    .select("*, group_members(*)");

  if (error) throw new Error("Groups could not be loaded");

  return data;
}

export async function updateGroupMembers(id, iq) {
  const { data, error } = await supabase
    .from("group_members")
    .update({ iq: iq + 1 })
    .eq("id", id);

  if (error) throw new Error("Участники не могут быть обновлены");

  return data;
}

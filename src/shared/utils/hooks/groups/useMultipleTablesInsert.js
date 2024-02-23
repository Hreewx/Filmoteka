import { useState } from "react";
import supabase from "../../../api/supabase";

// Test hook
const useCreateGroupAndMembers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createGroupAndMembers = async (groupName, members) => {
    setLoading(true);
    try {
      // Создаем запись в таблице groups
      const { data: groupData, error: groupError } = await supabase
        .from("groups")
        .insert([groupName]);

      if (groupError) {
        throw groupError;
      }

      const groupId = groupData.id;
      console.log(groupId);

      // Создаем записи в таблице group_members
      const membersWithGroupId = members.map((member) => ({
        ...member,
        groups_fk: groupId,
      }));

      const { data: memberData, error: memberError } = await supabase
        .from("group_members")
        .insert([...membersWithGroupId]);

      console.log(memberData);

      if (memberError) {
        throw memberError;
      }

      setLoading(false);
      // Здесь можно добавить обработчик успешного создания записей
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, createGroupAndMembers };
};

export default useCreateGroupAndMembers;

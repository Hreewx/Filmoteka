import { useForm } from "react-hook-form";
// import { useCreateGroup } from "../shared/utils/hooks/groups/useCreateGroup";
import { useState } from "react";
import { useGetProfileByName } from "../shared/utils/hooks/profile/useGetProfileByName";

import ButtonForm from "../shared/ui/ButtonForm";
import InputForm from "../shared/ui/InputForm";
import Textarea from "../shared/ui/Textarea";
// import UsersList from "../widgets/UsersList/UsersList";

import styles from "./CreateGroup.module.scss";
// import useCreateGroupAndMembers from "../shared/utils/hooks/groups/useMultipleTablesInsert";

// import { useCreateGroupMembers } from "../shared/utils/hooks/profile/useCreateGroupMembers";
import { createGroupWithMembers } from "../shared/api/apiGroups";
import AddedUsers from "../widgets/AddedUsers/AddedUsers";
import toast from "react-hot-toast";
// import Button from "../shared/ui/Button";

function CreateGroup() {
  const [name, setName] = useState("");
  const [usernameArray, setUsernameArray] = useState([]);
  const [usernameObj, setUsernameObj] = useState([]);
  // const { createGroup } = useCreateGroup();
  // const { createGroupAndMembers } = useCreateGroupAndMembers();

  function callbackToSetUsernameArray(data) {
    setUsernameArray(data);
  }

  const { username } = useGetProfileByName(name);

  const { register, formState, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  // const { createGroup } = useCreateGroup();
  // const { createGroupMembers } = useCreateGroupMembers();

  function handleChangeValue(e) {
    const value = e.target.value;
    setName(value);
  }

  function handleAddNameToArray(login, id) {
    const check = usernameArray.map((user) => user.login);

    if (check.includes(login)) {
      toast.error("Пользователь уже добавлен");
      return;
    }

    setUsernameArray((prev) => [...prev, { login: login, id: id }]);

    setUsernameObj([...usernameObj, { login: login, profile_fk: id }]);

    setName(() => "");
  }

  function onSubmit(data) {
    // createGroupAndMembers(data, usernameObj);
    // console.log({ ...data, id: data.id });
    createGroupWithMembers(data, usernameObj);
    // createGroup(data);
    // createGroupMembers(usernameObj);
  }

  return (
    <section className={styles.container}>
      <div className={styles.createFormContainer}>
        <h1>Создайте группу!</h1>
        <form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Название"
            register={{
              ...register("name", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Name needs to be at least 2 characters",
                },
              }),
            }}
            errorMessage={errors.name?.message}
          />

          {usernameArray.length > 0 && (
            <AddedUsers
              usernameArray={usernameArray}
              callbackToSetUsernameArray={callbackToSetUsernameArray}
            />
          )}

          <InputForm
            type="text"
            id="members"
            autoComplete="off"
            value={name}
            onChange={handleChangeValue}
            placeholder="Добавить друзей по их логину"
            // register={{
            //   ...register("members", {
            //     required: "This field is required",
            //     minLength: {
            //       value: 2,
            //       message: "Name needs to be at least 2 characters",
            //     },
            //   }),
            // }}
            // errorMessage={errors.members?.message}
          />
          {name.length > 0 ? (
            <div className={styles.profileNames}>
              Names
              <div className={styles.profileNamesContent}>
                {username
                  ? username.map((user) => (
                      <div
                        key={user.id}
                        onClick={() =>
                          handleAddNameToArray(user.login, user.id)
                        }
                        className={styles.user}
                      >
                        {user.login}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          ) : (
            ""
          )}

          <Textarea
            id="description"
            placeholder="Добавить информацию о группе"
            autoComplete="off"
            register={{
              ...register("description"),
            }}
            errorMessage={errors.description?.message}
          />
          <ButtonForm>Создать группу</ButtonForm>
        </form>
      </div>
    </section>
  );
}

export default CreateGroup;

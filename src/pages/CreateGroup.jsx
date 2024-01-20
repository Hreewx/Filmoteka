import { useForm } from "react-hook-form";
import { useCreateGroup } from "../shared/utils/hooks/useCreateGroup";

import ButtonForm from "../shared/ui/ButtonForm";
import InputForm from "../shared/ui/InputForm";
import Textarea from "../shared/ui/Textarea";
import styles from "./CreateGroup.module.scss";

function CreateGroup() {
  const { createGroup } = useCreateGroup();

  const { register, formState, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  function onSubmit(data) {
    createGroup(data);
  }

  return (
    <section className={styles.container}>
      <div className={styles.createFormContainer}>
        <h1>Start by creating your party!</h1>
        <form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Name your group"
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
          <InputForm
            type="text"
            id="members"
            autoComplete="off"
            placeholder="Add friends by their login"
            register={{
              ...register("members", {
                required: "This field is required",
                minLength: {
                  value: 2,
                  message: "Name needs to be at least 2 characters",
                },
              }),
            }}
            errorMessage={errors.members?.message}
          />
          <Textarea
            id="description"
            placeholder="Input something here about your party"
            autoComplete="off"
            register={{
              ...register("description"),
            }}
            errorMessage={errors.description?.message}
          />
          <ButtonForm>Create group</ButtonForm>
        </form>
      </div>
    </section>
  );
}

export default CreateGroup;

import { useState } from "react";
import { useUpdateUser } from "../../shared/utils/hooks/user/useUpdateUser";
import { useUser } from "../../shared/utils/hooks/user/useUser";

import Button from "../../shared/ui/Button";
import InputForm from "../../shared/ui/InputForm";
import styles from "./ProfileUserData.module.scss";

function ProfileUserData() {
  const [avatar, setAvatar] = useState(null);
  const { updateUser, isUpdating } = useUpdateUser();
  const { user } = useUser();

  const login = user?.user_metadata.login;
  const email = user?.email;

  function handleSubmit(e) {
    e.preventDefault();
    updateUser({ avatar });
  }

  return (
    <>
      <h2>Информация о пользователе</h2>
      <div className={styles.infoRow}>
        <label>Имя пользователя</label>
        <InputForm type="text" value={login} disabled={true} />
      </div>
      <div className={styles.infoRow}>
        <label>Адрес электронной почты</label>
        <InputForm type="text" value={email} disabled={true} />
      </div>
      <div className={styles.infoRow}>
        <label>Аватар</label>
        <InputForm
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </div>
      <div className={styles.infoRow}>
        <Button disabled={isUpdating} onClick={handleSubmit}>
          Обновить данные
        </Button>
      </div>
    </>
  );
}

export default ProfileUserData;

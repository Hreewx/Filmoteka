import { useCreateReview } from "../shared/utils/hooks/reviews/useCreateReviews";
import { useForm } from "react-hook-form";
import { useGroup } from "../shared/utils/hooks/Groups/useGroup";

import Button from "../shared/ui/Button";
import InputForm from "../shared/ui/InputForm";

import styles from "./NewReview.module.scss";
import { useLocation } from "react-router-dom";

function NewReview() {
  const { createReview } = useCreateReview();
  const { state } = useLocation();
  const { group } = useGroup();

  const { register, formState, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  function onSubmit(data) {
    createReview({ ...data, group_id: group.id });
  }

  return (
    <section className={styles.container}>
      <h1>Отзыв</h1>
      <div className={styles.reviewContainer}>
        <div className={styles.posterContainer}>
          <img
            src={state?.poster || "/images/blade-runner.webp"}
            alt="Poster image"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              id="poster"
              autoComplete="off"
              placeholder="Film poster"
              register={{
                ...register("poster", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Login must be at least 2 characters",
                  },
                }),
              }}
              errorMessage={errors.poster?.message}
            />
          </div>

          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Название"
              value={"" || state?.movieName}
              register={{
                ...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Login must be at least 2 characters",
                  },
                }),
              }}
              errorMessage={errors.name?.message}
            />
          </div>

          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              id="overview"
              autoComplete="off"
              placeholder="Описание"
              register={{
                ...register("overview", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Login must be at least 2 characters",
                  },
                }),
              }}
              errorMessage={errors.overview?.message}
            />
          </div>

          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              id="who_watched"
              autoComplete="off"
              placeholder="Кто смотрел"
              register={{
                ...register("who_watched", {
                  required: "This field is required",
                  minLength: {
                    value: 2,
                    message: "Login must be at least 2 characters",
                  },
                }),
              }}
              errorMessage={errors.who_watched?.message}
            />
          </div>

          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              id="rating"
              autoComplete="off"
              placeholder="Оценка"
              register={{
                ...register("rating", {
                  required: "This field is required",
                  minLength: {
                    value: 1,
                    message: "Rating must be at least 1 character",
                  },
                }),
              }}
              errorMessage={errors.rating?.message}
            />
          </div>

          <Button>Добавить отзыв</Button>
        </form>
      </div>
    </section>
  );
}

export default NewReview;

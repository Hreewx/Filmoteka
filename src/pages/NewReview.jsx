import { useCreateReview } from "../shared/utils/hooks/reviews/useCreateReviews";
import { useForm } from "react-hook-form";
import { useGroup } from "../shared/utils/hooks/groups/useGroup";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useGetGroupMembers } from "../shared/utils/hooks/profile/useGetGroupMembers";

import Button from "../shared/ui/Button";
import InputForm from "../shared/ui/InputForm";

import SearchBarHeader from "../shared/ui/SearchBarHeader";
import Select from "react-select";

import styles from "./NewReview.module.scss";

import Spinner from "../shared/ui/Spinner";
import { updateGroupMembers } from "../shared/api/apiGroups";

function NewReview() {
  const { groupId } = useParams();
  const [step, setStep] = useState(1);
  const { createReview } = useCreateReview();
  const { state } = useLocation();
  const { group } = useGroup();
  const [searchParams, setSearchParams] = useSearchParams();

  const test = 1;

  const { groupMembers, isLoadingMembers } = useGetGroupMembers(groupId);
  const { register, formState, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  // const [selectedOptions, setSelectedOptions] = useState([]);

  const [reviewData, setReviewData] = useState({
    poster: "",
    name: "",
    overview: "",
    who_watched: "",
    rating_by_user: "",
    rating: "",
    group_id: "",
  });

  const [ratings, setRatings] = useState([]);

  if (isLoadingMembers) return <Spinner />;

  function handleSelectReviewMovie(data) {
    searchParams.set("step", step);
    setSearchParams(searchParams);
    setReviewData(data);
    setStep((prev) => prev + 1);
  }

  function handleNext() {
    searchParams.set("step", step);
    setSearchParams(searchParams);
    setStep((prev) => prev + 1);
  }
  console.log(searchParams);

  function handleBack() {
    searchParams.set("step", step);
    setSearchParams(searchParams);
    setStep((prev) => prev - 1);
  }

  function handleChangeFormField(e) {
    setReviewData({ ...reviewData, [e.target.id]: e.target.value });
  }

  function handleChangeSelect(selectedOption) {
    setReviewData({ ...reviewData, who_watched: selectedOption });
  }

  function handleRatingChange(userName, rating) {
    const updatedRatings = [...ratings];
    let found = false;
    for (let i = 0; i < updatedRatings.length; i++) {
      if (updatedRatings[i].userName === userName) {
        updatedRatings[i].rating = rating;
        found = true;
        break;
      }
    }
    if (!found) {
      updatedRatings.push({ userName, rating });
    }
    setRatings(updatedRatings);
    setReviewData({ ...reviewData, rating_by_user: updatedRatings });
  }

  const options = groupMembers.map((member) => ({
    value: member.login,
    label: member.login,
  }));

  const summaryRating = ratings.reduce(
    (total, obj) => total + Number(obj.rating) / 2,
    0
  );

  // function onSubmit(data) {
  //   createReview({ ...data, group_id: group.id });
  // }

  function onSubmit() {
    for (let i = 0; i < reviewData.who_watched.length; i++) {
      if (reviewData.who_watched[i].label === groupMembers[i].login)
        updateGroupMembers(groupMembers[i].id, groupMembers[i].iq);
    }

    createReview({
      ...reviewData,
      rating: summaryRating,
      group_id: group.id,
    });
  }

  return (
    <section className={styles.container}>
      <h1>Создание обзора</h1>
      {step === 1 && (
        <div className={styles.step}>
          <h2>Выберите фильм для оценки</h2>
          <SearchBarHeader
            withCustomHandler={true}
            onSelectReviewMovie={handleSelectReviewMovie}
          />
          <Button onClick={handleNext}>Далее</Button>
        </div>
      )}
      {step === 2 && (
        <div className={styles.step}>
          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Название"
              value={reviewData.name}
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
          <Button onClick={handleNext}>Далее</Button>
          <Button onClick={handleBack}>Назад</Button>
        </div>
      )}
      {step === 3 && (
        <div className={styles.step}>
          <div className={styles.inputWrapper}>
            <InputForm
              type="text"
              name="overview"
              id="overview"
              onChange={handleChangeFormField}
              placeholder="О чем был фильм по Вашему мнению"
              // register={{
              //   ...register("overview", {
              //     required: "This field is required",
              //     minLength: {
              //       value: 2,
              //       message: "Login must be at least 2 characters",
              //     },
              //   }),
              // }}
              // errorMessage={errors.overview?.message}
            />
          </div>
          <Button onClick={handleNext}>Далее</Button>
          <Button onClick={handleBack}>Назад</Button>
        </div>
      )}
      {step === 4 && (
        <div className={styles.step}>
          <div className={styles.inputWrapper}>
            {/* <select
              onChange={handleChangeFormField}
              id="who_watched"
              style={{ height: "50px", width: "100px" }}
            >
              {groupMembers.map((member) => (
                <option key={member.login} value={member.login}>
                  {member.login}
                </option>
              ))}
            </select> */}
            <Select
              onChange={handleChangeSelect}
              value={reviewData.who_watched}
              options={options}
              isMulti={true}
            />
            {/* <InputForm
              type="text"
              id="who_watched"
              name="who_watched"
              autoComplete="off"
              onChange={handleChangeFormField}
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
            /> */}
          </div>
          <Button onClick={handleNext}>Далее</Button>
          <Button onClick={handleBack}>Назад</Button>
        </div>
      )}
      {step === 5 && (
        <div className={styles.step}>
          <div className={styles.inputWrapper}>
            <h2>Оценка по каждому зрителю</h2>
            <div className={styles.infoRow}>
              {reviewData.who_watched.map((user) => (
                <>
                  <label key={user.label}>{user.value}</label>
                  <InputForm
                    type="text"
                    id="rating_by_user"
                    name="rating"
                    onChange={(e) =>
                      handleRatingChange(user.value, e.target.value)
                    }
                    autoComplete="off"
                    placeholder="Оценка от зрителя"
                  />
                </>
              ))}
            </div>

            <Button onClick={handleNext}>Далее</Button>
            <Button onClick={handleBack}>Назад</Button>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className={styles.inputWrapper}>
          <InputForm
            type="text"
            id="rating"
            name="rating"
            value={summaryRating}
            onChange={handleChangeFormField}
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
          <Button onClick={handleNext}>Далее</Button>
          <Button onClick={handleBack}>Назад</Button>
        </div>
      )}
      {step === 7 && <Button onClick={onSubmit}>Создать обзор</Button>}
      {test === 2 && (
        <>
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
        </>
      )}
    </section>
  );
}

export default NewReview;

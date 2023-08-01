import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img
              src={`${currentUser.data?.avatar}`}
              alt="аватар профиля"
              className="profile__avatar"
            />
            <div className="profile__overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{`${currentUser.data?.name}`}</h1>
            <button
              className="profile__button-edit button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__bio">{`${currentUser.data?.about}`}</p>
          </div>
        </div>
        <button
          className="profile__button-add button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="фотогалерея профиля">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

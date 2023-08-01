import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser.data._id;
  const isLiked = props.card.likes?.some((i) => i === currentUser.data._id);
  // const cardLikeButtonClassName = `elements__like ${
  //   isLiked && "elements__like_active"
  // }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="elements__item">
      <img
        src={`${props.card.link}`}
        className="elements__pic"
        alt={`${props.card.name}`}
        onClick={handleClick}
      />
      {isOwn && (
        <button
          className="elements__delete-button button"
          type="button"
          id="delete"
          onClick={handleDeleteClick}
        />
      )}
      <div className="elements__bottom-container">
        <h2 className="elements__caption">{`${props.card.name}`}</h2>
        <div className="elements__likesmetter">
          <button
            className={`elements__like${isLiked ? ' elements__like_active' : ''}`}
            type="button"
            id="like"
            onClick={handleLikeClick}
          ></button>
          <span className="elements__like-counter">
            {props.card.likes?.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;

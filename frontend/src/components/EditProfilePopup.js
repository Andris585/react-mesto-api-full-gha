import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      btnText={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          id="popup__input-edit-profile"
          type="text"
          name="name"
          placeholder="Ваше имя?"
          className="popup__input popup__input_type_name"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
          onChange={handleNameChange}
          value={name}
        />
        <span className="popup__error popup__input-edit-profile-error"></span>
      </div>
      <div className="popup__input-container">
        <input
          id="popup__input-bio"
          type="text"
          name="about"
          placeholder="Кто вы?"
          className="popup__input popup__input_type_bio"
          required
          minLength="2"
          maxLength="200"
          autoComplete="off"
          onChange={handleDescriptionChange}
          value={description}
        />
        <span className="popup__error popup__input-bio-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

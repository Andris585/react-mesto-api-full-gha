import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      btnText={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          id="popup__input-location-name"
          type="text"
          name="name"
          placeholder="Название"
          className="popup__input popup__input_type_location-name"
          required
          minLength="2"
          maxLength="30"
          autoComplete="off"
          onChange={handleNameChange}
          value={name}
        />
        <span className="popup__error popup__input-location-name-error"></span>
      </div>
      <div className="popup__input-container">
        <input
          id="popup__input-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          required
          autoComplete="off"
          onChange={handleLinkChange}
          value={link}
        />
        <span className="popup__error popup__input-link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [props.isOpen])

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen ? "popup_opened" : ""}
      onClose={props.onClose}
      btnText={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          id="popup__avatar-input-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_link"
          required
          autoComplete="off"
          ref={inputRef}
        />
        <span className="popup__error popup__avatar-input-link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

function PopupWithForm(props) {
  const openPopup = props.isOpen ? "popup_opened" : "";
  return (
    <div className={`popup popup_type_${props.name} ${openPopup}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          className="popup__close-button button"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          action="#"
          className={`popup__form popup__form_type_${props.name}`}
          name={`${props.name}`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            type="submit"
            className={`popup__submit popup_submit_type_${props.name}`}
          >
            {`${props.btnText}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

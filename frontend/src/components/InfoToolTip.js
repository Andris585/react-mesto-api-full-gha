import { useNavigate } from "react-router-dom";

function InfoToolTip({ name, title, picURL, isOpen, onClose }) {
  const navigate = useNavigate();
  const openPopup = isOpen ? "popup_opened" : "";
  return (
    <div className={`popup popup_type_${name} ${openPopup}`}>
      <div className="popup__container">
        <div
          className="popup__status-pic"
          style={{
            backgroundImage: `url(${picURL})`,
          }}
        ></div>
        <h2 className="popup__title popup__title_type_reg-status">{title}</h2>
        {name === "registration-success" ? (
          <button
            className="popup__close-button button"
            type="button"
            onClick={() => {
              navigate("/sign-in");
              onClose();
            }}
          ></button>
        ) : (
          <button
            className="popup__close-button button"
            type="button"
            onClick={onClose}
          ></button>
        )}
      </div>
    </div>
  );
}

export default InfoToolTip;

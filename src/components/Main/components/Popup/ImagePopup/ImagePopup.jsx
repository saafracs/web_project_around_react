import esc from "../../../../../images/close_icon.svg";

export default function ImagePopup({ name, link, onClose }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content-full">
        <img
          src={esc}
          alt="close icon"
          className="popup__close-button popup__close-button_full"
          onClick={onClose}
        />
        <div className="popup__body">
          <img src={link} alt={name} className="popup__body-image" />
          <h1 className="popup__body-text">{name}</h1>
        </div>
      </div>
    </div>
  );
}

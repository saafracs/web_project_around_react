import esc from "../../../../images/close_icon.svg";

export default function Popup({ onClose, title, children }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <img
          src={esc}
          alt="close icon"
          className="popup__close-button popup__close-button_profile"
          onClick={onClose}
        />
        <div className="popup__body">
          <h1 className="popup__title">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

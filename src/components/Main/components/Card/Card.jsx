import trash from "../../../../images/trash.svg";
import like from "../../../../images/like.svg";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";

export default function Card({ link, name, isLiked = false, onCardClick }) {
  const imageComponent = {
    children: <ImagePopup card />,
  };
  return (
    <div className="elements__card">
      <div className="elements__trash">
        <img src={trash} alt="trash" />
      </div>
      <img
        src={link}
        alt={name}
        className="elements__card-image"
        onClick={onCardClick}
      />
      <div className="elements__card-footer">
        <h3 className="elements__card-title">{name}</h3>
        <div className="elements__card-footer-like">
          <img src={like} alt="like" />
        </div>
      </div>
    </div>
  );
}

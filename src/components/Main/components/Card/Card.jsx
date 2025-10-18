import trash from "../../../../images/trash.svg";
import like from "../../../../images/like.svg";
import liked from "../../../../images/liked.svg";

export default function Card({
  link,
  name,
  isLiked,
  onImageClick,
  onCardLike,
  onCardDelete,
}) {
  return (
    <div className="elements__card">
      <div className="elements__trash">
        <img src={trash} onClick={onCardDelete} alt="trash" />
      </div>
      <img
        src={link}
        alt={name}
        className="elements__card-image"
        onClick={onImageClick}
      />
      <div className="elements__card-footer">
        <h3 className="elements__card-title">{name}</h3>
        <div className="elements__card-footer-like" onClick={onCardLike}>
          <img src={isLiked ? liked : like} alt="like" />
        </div>
      </div>
    </div>
  );
}

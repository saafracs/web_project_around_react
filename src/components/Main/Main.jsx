import { useState } from "react";
import profilePic from "../../images/profile.jpg";
import addPicture from "../../images/add-button.svg";
import editProfile from "../../images/edit-button.svg";
import NewCard from "../../components/Main/components/Popup/form/NewCard/NewCard.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Card from "./components/Card/Card.jsx";
import EditComponentProfile from "./components/Popup/form/EditProfile/EditProfile.jsx";
import EditAvatar from "../Main/components/Popup/form/EditAvatar/EditAvatar.jsx";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };

  const editButtonProfile = {
    title: "Editar Perfil",
    children: <EditComponentProfile />,
  };

  const editAvatarContent = {
    title: "Cambia foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  const handleImageClose = () => {
    setSelectedCard(null);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };
  return (
    <main className="content">
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      <section className="profile">
        <div className="profile__content">
          <div className="profile-image">
            <div className="profile-image__icon"></div>
            <img
              src={profilePic}
              alt="Profile Picture"
              className="profile-image__pic"
              onClick={() => {
                handleOpenPopup(editAvatarContent);
              }}
            />
          </div>
          <div className="profile__info">
            <div className="profile__details">
              <h2 className="profile-name">...</h2>
              <img
                src={editProfile}
                alt="edit button"
                className="profile__edit-button"
                onClick={() => {
                  handleOpenPopup(editButtonProfile);
                }}
              />
            </div>
            <p className="profile-title">...</p>
          </div>
        </div>
        <img
          src={addPicture}
          alt="add button"
          className="profile__add-button"
          onClick={() => {
            handleOpenPopup(newCardPopup);
          }}
        />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            isLiked={card.isLiked}
            onCardClick={() => {
              {
                setSelectedCard(card);
              }
            }}
          />
        ))}
      </section>
      {selectedCard && (
        <Popup>
          <ImagePopup
            onClose={handleImageClose}
            name={selectedCard.name}
            link={selectedCard.link}
          />
        </Popup>
      )}
    </main>
  );
}

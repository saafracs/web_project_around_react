import { useState, useEffect, useContext, useRef } from "react";

import api from "../../utils/api.jsx";
import addPicture from "../../images/add-button.svg";
import editProfile from "../../images/edit-button.svg";
import Popup from "./components/Popup/Popup.jsx";
import Card from "./components/Card/Card.jsx";

import EditComponentProfile from "../../components/Main/components/Popup/form/EditProfile/EditProfile.jsx";
import NewCard from "../../components/Main/components/Popup/form/NewCard/NewCard.jsx";
import EditAvatar from "../Main/components/Popup/form/EditAvatar/EditAvatar.jsx";

import ImagePopup from "./components/Popup/ImagePopup/ImagePopup.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Main({ onOpenPopup, popup, handleClosePopup }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  const handleImageClose = () => {
    setSelectedCard(null);
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.createCards(name, link).then((card) => setCards([card, ...cards]));
  };

  const newCardPopup = {
    title: "Nuevo Lugar",
    children: (
      <NewCard
        handleAddPlaceSubmit={handleAddPlaceSubmit}
        handleClosePopup={handleClosePopup}
      />
    ),
  };

  const editButtonProfile = {
    title: "Editar Perfil",
    children: <EditComponentProfile handleClosePopup={handleClosePopup} />,
  };

  const editAvatarContent = {
    title: "Cambia foto de perfil",
    children: <EditAvatar handleClosePopup={handleClosePopup} />,
  };

  useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    });
  }, [setCards]);

  async function handleCardDelete(card) {
    await api.removeCard(card._id);

    setCards((state) =>
      state.filter((currentCard) => currentCard._id !== card._id)
    );
  }

  //
  const handleCardLike = (cardId, isLiked) => {
    if (isLiked) {
      api.removeLike(cardId).then((card) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? card : currentCard
          )
        );
      });
    } else {
      api.likeCard(cardId).then((card) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? card : currentCard
          )
        );
      });
    }
  };
  //

  return (
    <main className="content">
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}

      <section className="profile">
        <div className="profile__content">
          <div
            className="profile-image"
            onClick={() => {
              onOpenPopup(editAvatarContent);
            }}
          >
            <div className="profile-image__icon"></div>
            <img
              src={currentUser.avatar}
              alt="Profile Picture"
              className="profile-image__pic"
            />
          </div>
          <div className="profile__info">
            <div className="profile__details">
              <h2 className="profile-name">{currentUser.name}</h2>
              <img
                src={editProfile}
                alt="edit button"
                className="profile__edit-button"
                onClick={() => {
                  onOpenPopup(editButtonProfile);
                }}
              />
            </div>
            <p className="profile-title">{currentUser.about}</p>
          </div>
        </div>
        <img
          src={addPicture}
          alt="add button"
          className="profile__add-button"
          onClick={() => {
            onOpenPopup(newCardPopup);
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
            onImageClick={() => {
              {
                setSelectedCard(card);
              }
            }}
            onCardLike={() => {
              handleCardLike(card._id, card.isLiked);
            }}
            onCardDelete={() => {
              handleCardDelete(card);
            }}
          />
        ))}
      </section>
      {selectedCard && (
        <ImagePopup
          onClose={handleImageClose}
          name={selectedCard.name}
          link={selectedCard.link}
        />
      )}
    </main>
  );
}

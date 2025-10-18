import CurrentUserContext from "./contexts/CurrentUserContext.jsx";
import Header from "../components/Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import { useState, useEffect, useContext } from "react";
import api from "../utils/api.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api.getUser().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUser(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (avatar) => {
    api.updateAvatar(avatar).then((user) => {
      setCurrentUser(user);
      handleClosePopup();
    });
  };

  function onOpenPopup(popup) {
    setPopup(popup);
  }

  const handleClosePopup = () => {
    setPopup(null);
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          handleUpdateAvatar={handleUpdateAvatar}
          onOpenPopup={onOpenPopup}
          handleClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

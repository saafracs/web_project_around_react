import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext); // Obtiene el objeto currentUser
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios

    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };

  return (
    <form className="form form_profile" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <input
          type="text"
          name="name"
          id="name-edit"
          placeholder="Nombre"
          className="form__input form__input-text form__input-name"
          required
          minLength="2"
          maxLength="40"
          value={name} // Vincula name con la entrada
          onChange={handleNameChange} // Agrega el controlador onChange
        />
        <span className="form__span form__span_type_error name-edit-error"></span>
        <input
          type="text"
          name="about"
          id="about"
          placeholder="Acerca de Mi"
          className="form__input form__input-text form__input-about"
          required
          minLength="2"
          maxLength="200"
          value={description} // Vincula description con la entrada
          onChange={handleDescriptionChange} // Agrega el controlador onChange
        />
        <span className="form__span form__span_type_error about-error"></span>
      </fieldset>
      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

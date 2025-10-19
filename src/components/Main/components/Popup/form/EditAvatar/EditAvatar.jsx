import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const formRef = useRef();

  const userContext = useContext(CurrentUserContext);
  const { handleUpdateAvatar } = userContext;

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios
    const avatar = formRef.current.avatar.value;
    handleUpdateAvatar(avatar); // Actualiza la información del usuario
  };

  return (
    <form
      className="form form_profile-picture"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <input
          type="url"
          name="avatar"
          className="form__input"
          placeholder="Enlace a Foto de Perfil"
          id="avatar"
          required
        />
        <span className="form__span form__span_type_error avatar-error"></span>
      </fieldset>
      <button type="submit" className="popup__button">
        Cambiar
      </button>
    </form>
  );
}

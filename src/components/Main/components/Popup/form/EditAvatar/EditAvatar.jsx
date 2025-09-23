export default function EditAvatar() {
  return (
    <form className="form form_profile-picture">
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
      <button type="submit" className="popup__button" disabled>
        Cambiar
      </button>
    </form>
  );
}

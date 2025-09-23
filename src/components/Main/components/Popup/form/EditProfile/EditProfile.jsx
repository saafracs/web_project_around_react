export default function EditProfile() {
  return (
    <form className="form form_profile">
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
        />
        <span className="form__span form__span_type_error about-error"></span>
      </fieldset>
      <button className="popup__button" type="submit" disabled>
        Guardar
      </button>
    </form>
  );
}

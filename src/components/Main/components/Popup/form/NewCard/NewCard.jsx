export default function NewCard() {
  return (
    <>
      <form className="form form_image">
        <fieldset className="form__fieldset">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Titulo"
            className="form__input form__input-text form__input-name-image"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="form__span form__span_type_error name-error"></span>
          <input
            type="url"
            name="link"
            id="link"
            placeholder="Enlace a la imagen"
            className="form__input form__input-text form__input-title-image"
            required
          />
          <span className="form__span form__span_type_error link-error"></span>
        </fieldset>
        <button className="popup__button" type="submit" disabled>
          Crear
        </button>
      </form>
    </>
  );
}

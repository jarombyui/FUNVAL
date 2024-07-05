// import icon from '../../assets/js.png'

export const Profile = ({titulo1, titulo2, nombre, telefono, email, linkedlin, Pais, Ciudad, Profesion, Idioma}) => {
  return (
    <aside>
      <figure>
        <img src="images/js.png" alt="My icon" />
      </figure>

      <h2>{titulo1}</h2>
      <ul>
        <li>{nombre}</li>
        <li>{telefono}</li>
        <li>{email}</li>
        <li>{linkedlin}</li>
      </ul>
      <h2>{titulo2}</h2>
      <ul>
        <li>{Pais}</li>
        <li>{Ciudad}</li>
        <li>{Profesion}</li>
        <li>{Idioma}</li>
      </ul>
    </aside>
  )
};


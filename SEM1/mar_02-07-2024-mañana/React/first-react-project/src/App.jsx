import "./App.css"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"

function App() {
  return (
    <>
      <Profile titulo1 = "Datos personales"  nombre ="Jarom C." telefono = "947726382" email = "jaromcamposrodriguez@gmail.com" linkedlin = "https://www.linkedin.com/in/jarom-campos/" titulo2 = "Referencias" Pais= "Perú" Ciudad = "Lima" Profesion = "Desarrollador Full-stack" Idioma = "Español / English"/>
      <div className="right">
        <Navbar />
        <Main title ="Probando las prop en React"
        subtitle ="Probando las prop en React 2"/>

      </div>
    </>
  )
}

export default App

import "./App.css"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"

function App() {
  return (
    <>
      <Profile />
      <div className="right">
        <Navbar/>
        <Main/>

      </div>
    </>
  )
}

export default App

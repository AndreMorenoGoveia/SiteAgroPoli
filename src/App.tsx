import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./paginas/Home"
import { RPG } from "./paginas/RPG"
import { Login } from "./paginas/Login"

function App() {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RPG" element={<RPG/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Container>
  )
}

export default App;

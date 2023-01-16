import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./paginas/Home"
import { RPG } from "./paginas/RPG"

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RPG" element={<RPG/>}/>
      </Routes>
    </Container>
  )
}

export default App

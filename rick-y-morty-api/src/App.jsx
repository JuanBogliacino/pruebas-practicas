import { Route, Routes } from "react-router-dom"
import CharacterList from "./pages/CharacterList"
import CharacterDetail from "./pages/CharacterDetail"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
    </>
  )
}

export default App

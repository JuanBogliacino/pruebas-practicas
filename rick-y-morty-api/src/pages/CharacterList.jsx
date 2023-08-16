import { useContext } from "react"
import { Link } from "react-router-dom"
import { CharacterContext } from "../context/CharacterContext"

const CharacterList = () => {
    const { characters } = useContext(CharacterContext)

  return (
    <div className="container">
        <h2>CharacterList</h2>
        <ul className="list-characters">
          {
            characters.map((character) => (
              <Link key={character.id} to={`/character/${character.id}`} className="ul-links">
                <h4>{character.name}</h4>
                <img src={character.image} alt={character.name} />
              </Link>
            ))
          }
        </ul>
    </div>
  )
}

export default CharacterList
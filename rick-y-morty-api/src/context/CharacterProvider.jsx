import { CharacterContext } from "./CharacterContext";
import { useState, useEffect } from "react";

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [])

    const getCharacterDetail = (id) => {
      const characterFind = characters.find(crt => crt.id === id)
      return characterFind
    }
    
    return (
        <CharacterContext.Provider value={{
            characters,
            getCharacterDetail
        }}>
            { children }
        </CharacterContext.Provider>
    )
}
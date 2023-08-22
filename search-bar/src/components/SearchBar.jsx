import { useState } from "react";

const suggestionsList = [
    { id: 1, text: 'Playa tropical', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfeTnbAQwTbJS5CzbG26CkuFcuVz0O7_GtA&usqp=CAU' },
    { id: 2, text: 'Montañas nevadas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMJjrDS9hgZNdnYghsQQ7dXV4dwkizA412w&usqp=CAU' },
    { id: 3, text: 'Ciudad nocturna', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7FAVXs7v_9ovRoJgHBzcntzopG-1SXSNUw&usqp=CAU' },
    { id: 4, text: 'Aventuras al aire libre', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgQqOb5Z9cJPuu6-7PcGvTqqI898SXG7GDw&usqp=CAU' },
    { id: 5, text: 'Gastronomía del mundo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3CzYCka8MP6dbSrDQvYJ5fP2mvS-VTta5Q&usqp=CAU' },
    { id: 6, text: 'Explorando la naturaleza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm12x0RGW2Zk2eQtb-oKp0AlBLNxDZXs6fQ&usqp=CAU' },
    { id: 7, text: 'Cultura local', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk4ZSymy3cMonv6FO3awCl8UuJhaj9WAi0A&usqp=CAU' },
    { id: 8, text: 'Relajación y spa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSLoMFJC8ocp8v0fJx0CyNZUzif3iX9GS6g&usqp=CAU' },
    { id: 9, text: 'Turismo histórico', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aSFXb1jcvPxE7VPKzuqxQFtaofg5vByloQ&usqp=CAU' },
    { id: 10, text: 'Deportes acuáticos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XXaasQ4XmHfqj96U-vZW7d9HaHUE_TGVBg&usqp=CAU' },
  ];
  

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [search, setSearch] = useState({})

    const handleChange = (e) => {
        setInputValue(e.target.value)

        searchSuggestions(e.target.value)
    }

    const searchSuggestions = (value) => {
        if (value.trim() == '') return setSuggestions([])

        const suggestionsShow = suggestionsList.filter(sug => sug.text.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
        setSuggestions(suggestionsShow)
    }

    const selectSuggestion = (suggestion) => {
        setInputValue(suggestion.text)

        setSuggestions([])
        setSearch({ text: suggestion.text, image: suggestion.image })
    }

  return (
    <>
    <h1>Search Bar</h1>
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <ul className={`${suggestions.length > 0 ? "ul-styles" : ""}`}>
        {
            suggestions.map(suggestion => (
                <li key={suggestion.id} onClick={() => selectSuggestion(suggestion)}>{suggestion.text}</li>
            ))
        }
        </ul>
    </form>

    <div>
    <h2>{search.text}</h2>
    <img src={search.image} alt={search.text} />
    </div>
    </>
  )
}

export default SearchBar
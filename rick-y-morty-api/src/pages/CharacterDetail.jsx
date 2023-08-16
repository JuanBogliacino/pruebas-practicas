import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { CharacterContext } from '../context/CharacterContext';

const CharacterDetail = () => {
    const { getCharacterDetail } = useContext(CharacterContext)
    const { id } = useParams()
    const ctrId = parseInt(id)

    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(() => {
        setCharacterDetail(getCharacterDetail(ctrId))
    }, [])

  return (
    <div className="container">
        <Link to='/' className='link'>Volver</Link>
        <h2>CharacterDetail</h2>
        <h3>{characterDetail.name}</h3>
        <img src={characterDetail.image} alt={characterDetail.name} />
        <p>Species: {characterDetail.species}</p>
        <p>Location: {characterDetail?.location?.name}</p>
        <p>Origin: {characterDetail?.origin?.name}</p>
        <p>Status: {characterDetail.status}</p>
    </div>
  )
}

export default CharacterDetail
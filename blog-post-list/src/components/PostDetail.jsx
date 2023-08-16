import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PostContext } from '../context/PostContext'

const PostDetail = () => {
    const [post, setPost] = useState({})
    const [value, setValue] = useState('')

    const { id } = useParams()
    const numId = parseInt(id)

    const { getPostDetail } =  useContext(PostContext)

    useEffect(() => {
        const postFound = getPostDetail(numId)
        setPost(postFound)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() == '') return

        const comentariosActual = [...post.comentarios, value]
        setPost({
            ...post,
            comentarios: comentariosActual
        })
        
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
          <Link to='/' className='volver'><h1>Volver</h1></Link>
          <div className='post-container'>
            <h1>PostDetail</h1>
            {post.titulo && <h2>{post.titulo}</h2>}
            {post.contenido && <p className='contenido'>{post.contenido}</p>}
            <h3>Comentarios:</h3>
            {post.comentarios && post.comentarios.map((comentario, index) => (
              <p key={index}>{comentario}</p>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="">comentar</label>
            <input value={value} onChange={handleChange}  placeholder='comentar...' />
          </form>
        </>
      );
      
}

export default PostDetail
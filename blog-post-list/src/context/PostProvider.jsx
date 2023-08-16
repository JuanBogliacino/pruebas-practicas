import { PostContext } from "./PostContext";
import { useState } from "react";

export const PostProvider = ({ children }) => {
    const postList = [
        {
            id: 1,
            titulo: 'Post 1',
            contenido: 'Contenido del post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus assumenda facere iusto animi. Harum consequatur maxime est amet voluptatum repudiandae excepturi illum fugiat rem ex, a dolorem quas accusamus illo',
            comentarios: ['comentario 1', 'comentario 2', 'comentario 3']
        },
        {
            id: 2,
            titulo: 'Post 2',
            contenido: 'Contenido del post 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus assumenda facere iusto animi. Harum consequatur maxime est amet voluptatum repudiandae excepturi illum fugiat rem ex, a dolorem quas accusamus illo',
            comentarios: ['comentario 1', 'comentario 2', 'comentario 3']
        },
        {
            id: 3,
            titulo: 'Post 3',
            contenido: 'Contenido del post 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus assumenda facere iusto animi. Harum consequatur maxime est amet voluptatum repudiandae excepturi illum fugiat rem ex, a dolorem quas accusamus illo',
            comentarios: ['comentario 1', 'comentario 2', 'comentario 3']
        }
    ]

    const [posts, setPosts] = useState(postList)

    const getPostDetail = (id) => {
        const postFind = posts.find(post => post.id === id)
        return postFind
    }

    return (
        <PostContext.Provider value={{
            posts,
            getPostDetail
        }}>
            { children }
        </PostContext.Provider>
    )
}
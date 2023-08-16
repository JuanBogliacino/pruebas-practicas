import { useContext } from "react"
import { Link } from "react-router-dom"
import { PostContext } from "../context/PostContext"

const BlogPostList = () => {
    const { posts } =  useContext(PostContext)

  return (
    <>
     <h1>BlogPostList</h1>
     <ul>
        {posts.map(post => (
            <Link to={`post/${post.id}`} key={post.id} className="post-links">
             <li>
                <h3>{post.titulo}</h3>
             </li>
            </Link>
        ))}
     </ul>
    </>
  )
}

export default BlogPostList
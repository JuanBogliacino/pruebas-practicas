import { Route, Routes } from "react-router-dom"
import BlogPostList from "./components/BlogPostList"
import PostDetail from "./components/PostDetail"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<BlogPostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </>
  )
}

export default App

import Home from "./pages/Home";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes , Route} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

function App() {

    const { fetchBlogPosts } = useContext(AppContext);
    

    useEffect(() => {
      fetchBlogPosts();
    } ,[]);

  return (
    // <Home />


    <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/catogories/:category" element={<CategoryPage />} />
        
    </Routes>
  );
}

export default App;

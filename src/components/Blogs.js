import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from './Spinner';

// import Card from "./Card";

function Blogs() {

  const { posts , loading} = useContext(AppContext);
  console.log("inside blogs ..");
  console.log(posts);

  return (
    <div className="w-11/12 max-w-[600px] min-h-full self-center mt-6 flex flex-col gap-6 pt-16 pb-16">
        {
          loading ? (<Spinner />) : (
            posts.length === 0 ? (<div>No posts found </div>) : (
              posts.map((post) => (
                <div key={post.id} className="">
                    <p className="text-[1.4rem] font-[800] ">{post.title}</p>

                    <p className="text-[0.8999rem]">
                      By <span className="italic">{post.author}</span> on <span className="font-bold  underline-offset-2 underline decoration-dashed">{post.category}</span>
                    </p>
                    <p className="text-[0.9234rem] font-[400]">Posted On {post.date}</p>
                    <p className="mt-4 mb-2">{post.content}</p>
                    <div className="w-full flex flex-wrap gap-x-2"> 
                       {post.tags.map((tag , index) => {
                        return <span key={index}  className="text-[0.8rem] text-blue-700 underline cursor-pointer">{`#${tag} `}</span>
                       })}
                    </div>
                </div>
              ))
            )
          )
        }
    </div>
  )
}

export default Blogs;
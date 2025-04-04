import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export default function PostList() {

    const { postsList } = useContext(PostsContext)

    return (

        <>

            {postsList.map((post) => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Date:</strong> {post.date}</p>
                    <p><strong>Likes:</strong> {post.likes}</p>
                </div>
            ))}


        </>

    )

}
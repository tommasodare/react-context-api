import { useContext } from "react";
import PostsContext from "../context/PostContext";
import PostList from "./PostList";

export default function PostPage() {

    const { postsList } = useContext(PostsContext);

    return (
        <div className="post-page">
            <h1>Blog Posts</h1>
            <PostList />
        </div>
    );
}
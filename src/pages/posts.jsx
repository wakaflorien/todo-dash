import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../api/api";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    // const isLoading = useSelector((state) => state.posts.isLoading);
    // const error = useSelector((state) => state.posts.error)

    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        // select: (data) => {
        //     console.log("posts", data);
        //     dispatch(getPosts())
        // }
    })

    return (
        <div className="flex flex-col justify-center space-y-11">
            <h1 className="text-3xl">Posts page</h1>
            <div>
                {isLoading && <p>Loading ...</p>}
                {error && <p>{error}</p>}

                {!isLoading && data.posts.map((post) => (
                    <div key={post.id}>
                        <div className="flex flex-col space-y-4 p-4">
                            <h2 className="text-ld">{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts;
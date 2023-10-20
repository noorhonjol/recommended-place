import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";

import DataLoader from "../components/DataLoader";

const HomePage = () => {
    const { posts } = useLoaderData();
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <DataLoader
                        resolve={posts}
                        errorElement={<div>Could not load posts 😬</div>}
                    >
                        
                        {(resolvedPosts) => (
                            resolvedPosts.map((post) => (

                                <BlogCard
                                    imageUrl={post.imageUrl}
                                    userName={post.userName}
                                    key={post._id}
                                    title={post.title}
                                    content={post.content}
                                    likes={post.likes?.length || 0}
                                    comments={post.commentsCount || 0}
                                    postId={post._id}
                                />
                            )))
                        }
                    </DataLoader>
                </div>
            </div>
        </section>
    );
};

export default HomePage;

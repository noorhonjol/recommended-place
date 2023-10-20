import { useLoaderData } from "react-router-dom";
import DataLoader from "../components/DataLoader";
import CommentSection from "../components/CommentSection";
import PostDetails from "../components/PostDetails";


const PostDetailsPage = () => {
    const { postDetails } = useLoaderData();
    
    return (
        <DataLoader resolve={postDetails} errorElement={<p>err</p>} >
            {(resolvedPostDataDetails) => (
                <>
                    <PostDetails content={resolvedPostDataDetails.content}
                        title={resolvedPostDataDetails.title}
                        imageUrl={resolvedPostDataDetails.imageUrl} />
                    <CommentSection comments={resolvedPostDataDetails.comments} />
                </>
            )}
        </DataLoader>

    )
}

export default PostDetailsPage;
import {   Button, Heading, Stack, Textarea, useToast } from '@chakra-ui/react'
import { useContext } from 'react';
import { useState } from 'react'
import {  useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import useFetchData from '../../hooks/useFetchData';
import InteractiveStarRating from './InteractiveStarRating'

export default function AddingComment({refetch}) {
    const {id:postId}=useParams();
    const toast=useToast();
    const api=useFetchData();
    const {userInfo}=useContext(AuthContext);

    const [newComment, setNewComment] = useState("");
    const [commentRating, setCommentRating] = useState(0);
    
    const showToast = (title, description, status) => {
        toast({
            title,
            description,
            status,
            duration: 3000,
            isClosable: true,
        });
    };

    const handleComment = async () => {
        const data = {
            text: newComment,
            rating: commentRating
        };

        if (userInfo) {
            try {
                await api.post(`post/${postId}/comment`, data);
                showToast('Comment Added', 'Your comment has been successfully added.', 'success');
                setNewComment('')
                setCommentRating(0);
                refetch(); 
            } catch (error) {
                showToast('Error', 'Something went wrong.', 'error');
            }
        } else {
            showToast('Login Required', 'You should login to comment on this post.', 'warning');
        }
    };
    return (
    <Stack width="full" mt={8} spacing={4} p={2}>
        <Heading as="h3" size="md">Rate this place</Heading>
        <Stack p={3} spacing={2}>
            <InteractiveStarRating rating={commentRating} setRating={setCommentRating} />
            <Textarea
                placeholder="Write your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleComment}>Submit Comment</Button>
        </Stack>
    </Stack>
)
}

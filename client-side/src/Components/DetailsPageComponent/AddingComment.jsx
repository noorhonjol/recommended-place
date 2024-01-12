import {   Button, Heading, Stack, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import InteractiveStarRating from './InteractiveStarRating'

export default function AddingComment() {
    const [newComment, setNewComment] = useState("");
    const [commentRating, setCommentRating] = useState(0);

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
            <Button colorScheme="blue">Submit Comment</Button>
        </Stack>
    </Stack>
)
}

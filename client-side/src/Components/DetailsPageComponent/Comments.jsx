/* eslint-disable react/prop-types */
import { Box, Heading } from '@chakra-ui/react'
import CommentBox from './CommentBox'

export default function Comments({comments}) {
    return (
        <Box width="full">
            <Heading as="h2" size="md" mb={4}>Comments</Heading>
            {comments.map((comment) => (
                <CommentBox comment={comment} key={comment._id} />
            ))}
        </Box>
    ) 
}
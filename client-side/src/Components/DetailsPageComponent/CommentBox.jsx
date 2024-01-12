/* eslint-disable react/prop-types */
import { Box, Text } from '@chakra-ui/react'

import StarRating from '../StarRaiting'

export default function CommentBox({comment}) {
    return (
        <Box key={comment._id} p={4} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
            <Text fontWeight="bold">{comment.user.userName}</Text>
            <Text mt={2}>{comment.text}</Text>
            <StarRating rating={comment.rating} />
        </Box>
    )
}

import { SpinnerIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import StarRating from "./Components/StarRaiting";
import { Box,  Flex, Heading, Image, Text,  VStack } from "@chakra-ui/react";
import Comments from "./Components/DetailsPageComponent/Comments";
import AddingComment from "./Components/DetailsPageComponent/AddingComment";




export default function DetailsPage() {

    const{id}=useParams();
    const {data,isLoading,error}=useQuery("postData", () =>(
        axios.get(`http://localhost:3000/post/${id}`).then((res) => res.data)
    ))
    if (isLoading) return <SpinnerIcon/>;

    if (error) return "An error has occurred: " + error.message;

    const { title, imageUrl, content, metaData, comments } = data;

    return (
        <Flex direction="column" alignItems="center" p={5}>
            <Box width="full" maxW="md" mb={6}>
                <Image src={imageUrl} alt={title} borderRadius="md" />
            </Box>

            <VStack width="full" maxW="md" spacing={4}>
                <Heading as="h1">{title}</Heading>
                <Text>{content}</Text>
                <StarRating rating={metaData.avgRating} />
            </VStack>
            
            <AddingComment />
            <Comments comments={comments} />
            
        </Flex>
    )
}

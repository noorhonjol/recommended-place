/* eslint-disable react/prop-types */
import { Avatar, Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Link, Stack, Text } from "@chakra-ui/react";
import {BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from 'react-icons/bs';
import StarRating from "../StarRaiting";
import { Link as RouterLink } from 'react-router-dom';
export default function PlaceCard({ data }) {


    const {
        _id,
        title,
        imageUrl,
        content,
        user: { userName },
        metaData: { avgRating, commentsCount }
    } = data;

    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={userName} src={imageUrl} />
                        <Box>
                            <Text>{title}</Text>
                            <Heading size='sm'>{userName}</Heading>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>{content}</Text>
            </CardBody>
            <Image
                h='200px'
                objectFit='cover'
                src={imageUrl}
                // src={"localhost:3000/a.png"}
                alt={title}
            />
            <CardFooter
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                flexWrap='wrap'
            >
                
                <Stack gap={2}>

                    <StarRating rating={avgRating} />
                    <Text>{commentsCount} Comments</Text>
                </Stack>
                <Link as={RouterLink} to={`post/${_id}`}>
                    go to details
                    <BiChat />
                </Link>

            </CardFooter>
        </Card>
    );
}

import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import ProfileView from './Components/ProfileView';
import ProfileEditForm from './Components/Forms/ProfileEditForm';

const PostCard = ({ post }) => (
  <Box
    p={4}
    bg={useColorModeValue('white', 'gray.700')}
    boxShadow={'md'}
    rounded={'md'}
  >
    <Heading size="md">{post.title}</Heading>
    <Box mt={2}>{post.content}</Box>
  </Box>
);
// Mock data for posts (replace with real data fetching logic)
const mockPosts = [
  { id: 1, title: 'Post 1', content: 'Content for Post 1' },
  { id: 2, title: 'Post 2', content: 'Content for Post 2' },
  // ... more posts
];

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    userName: 'YourUserName',
    password: 'YourPassword',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (newData) => {
    setUserData(newData);
    setIsEditing(false);
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      p={6}>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6} w={'full'} maxW={'4xl'}>
        
        {/* Posts Section */}
        <GridItem w={'full'}>
          <Stack spacing={4}>
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Stack>
        </GridItem>

        {/* Profile Section */}
        <GridItem w={'full'}>
          <Stack
            spacing={4}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            align={'center'}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
              User Profile
            </Heading>

            {isEditing ? (
              <ProfileEditForm
                userData={userData}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <ProfileView userData={userData} />
            )}

            {!isEditing && (
              <Button onClick={handleEditClick} mt={4}>Edit Profile</Button>
            )}
          </Stack>
        </GridItem>

      </Grid>
    </Flex>
  );
};

export default ProfilePage;

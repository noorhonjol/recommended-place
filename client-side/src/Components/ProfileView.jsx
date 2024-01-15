import React from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';

const ProfileView = ({ userData }) => {
    return (
        <Stack spacing={3}>
            <Text>User Name: {userData.userName}</Text>
            <Text>Password: {userData.password}</Text>
        </Stack>
    );
};
export default ProfileView
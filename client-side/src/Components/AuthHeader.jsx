/* eslint-disable react/prop-types */

import { Stack, Heading, Text, Link } from '@chakra-ui/react';

const AuthHeader = ({ headingText, linkText, linkHref }) => {
    return (
        <Stack spacing="6">
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                <Heading size={{ base: 'xs', md: 'sm' }}>{headingText}</Heading>
                <Text color="fg.muted">
                    {linkText} <Link href={linkHref}>here</Link>
                </Text>
            </Stack>
        </Stack>
    );
};

export default AuthHeader;

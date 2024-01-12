/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const InteractiveStarRating = ({ rating, setRating }) => {
    return (
        <Flex p={2} >
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    color={i < rating ? 'gold' : 'gray'}
                    onClick={() => setRating(i + 1)}
                    size={25}
                    cursor="pointer"
                />
            ))}
        </Flex>
    );
};

export default InteractiveStarRating;
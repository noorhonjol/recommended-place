/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const totalStars = 5;

    const starDisplay = (index) => {
        if (rating >= index + 1) {
            return <FaStar key={index} color='gold' />;
        } else if (rating > index && rating < index + 1) {
            return <FaStarHalfAlt key={index} color='gold' />;
        } else {
            return <FaRegStar key={index} color='gray' />;
        }
    };

    return (
        <Flex>
            {[...Array(totalStars)].map((_, i) => starDisplay(i))}
        </Flex>
    );
};

export default StarRating;

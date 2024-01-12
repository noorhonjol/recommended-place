
import PlaceCard from './Components/Cards/PlaceCard'
import { SimpleGrid } from '@chakra-ui/react'
import { useQuery } from 'react-query';
import axios from 'axios'
import { SpinnerIcon } from '@chakra-ui/icons';
export default function HomePage() {
    const { isLoading, error, data } = useQuery("repoData", () =>

        axios.get(
        "http://127.0.0.1:3000/post"
        ).then((res) => res.data)
    );

    if (isLoading) return <SpinnerIcon/>;

    if (error) return "An error has occurred: " + error.message;


    return (
        <SimpleGrid mx="auto" columns={3} spacingX='40px' spacingY='20px'>
            {
                data.map((post) => (
                    <PlaceCard
                        key={post._id}
                        data={post}
                    />
                ))
            }
        </SimpleGrid>
    )
}

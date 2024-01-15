import { Box } from "@chakra-ui/react";
import AddPostForm from "./Components/Forms/AddPostForm";



export default function AddPostPage() {
    return (
        <Box sx={{w:"50%",mx:"auto",pt:15}}>
            
            <AddPostForm/>
        </Box>
    )
}

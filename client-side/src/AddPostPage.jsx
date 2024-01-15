import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import AddPostForm from "./Components/Forms/AddPostForm";



export default function AddPostPage() {
    const {userInfo}=useContext(AuthContext);

    return (
        <Box sx={{w:"50%",mx:"auto",pt:15}}>
            {!userInfo&&<Navigate to="/login" replace={true} />}
            <AddPostForm/>
        </Box>
    )
}

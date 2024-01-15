import DetailsPage from "./DetailsPage";
import HomePage from "./HomePage";
import { LoginPage } from "./LoginPage";
import MainLayout from "./MainLayout";
import { QueryClient, QueryClientProvider } from "react-query";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { AuthProvider } from "./AuthContext";
import AddPostPage from "./AddPostPage";
import ProfilePage from "./ProfilePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="about" element={<div>about</div>} />
      <Route path="post" element={<AddPostPage/>} />
      <Route path="contact" element={<div>contact</div>} />
      <Route path="post/:id" element={<DetailsPage/>} /> 
      <Route path="login" element={<LoginPage/>} />
      <Route path="register" element={<RegisterPage/>} />
      <Route path="profile" element={<ProfilePage/>}/>
      <Route path="*" element={<div>not found</div>} />
      
    </Route>
  )
  );

const queryClient = new QueryClient();
function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>

        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    
  )
}

export default App
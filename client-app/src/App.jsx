import Header from "./components/Header";
import api from "./helpers/api";
import HomePage from "./pages/HomePage";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,Outlet, defer}from "react-router-dom"
import PostDetailsPage from "./pages/PostDeatailsPage";
import LoginPage from "./pages/LoginPage";

// new Promise((resolve) => setTimeout(resolve, 4000))
const MainLayout=()=>(
  <>
    <Header/>
    <Outlet/>
  </>
)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} loader={()=>defer({posts:api('post') })}/>
      <Route path="/post/:postId" element={<PostDetailsPage/>} loader={({params})=>defer({postDetails:api(`post/${params.postId}`)})}/>
      <Route path="/login" element={<LoginPage/>} />

    </Route>
  )
);

export default function App() {
  return (  
    <RouterProvider router={router} />
  )
}
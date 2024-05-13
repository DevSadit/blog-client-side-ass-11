import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllBlogs from "../components/AllBlogs/AllBlogs";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import AddBlog from "../components/AddBlog/AddBlog";
import MyBlogs from "../components/MyBlogs/MyBlogs";
import UpdateBlog from "../components/UpdateBlog/UpdateBlog";
import FeaturedBlogs from "../components/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../components/Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/addblogs",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/myblogs",
        element: <MyBlogs></MyBlogs>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/featuredBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/updateBlog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogss/${params.id}`),
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(
            `https://blog-website-rho-henna.vercel.app/blogss/${params.id}`
          ),
      },
    ],
  },
]);

export default router;

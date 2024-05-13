import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RecBlog from "./RecBlog";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://blog-website-rho-henna.vercel.app/blogss`)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="text-center space-y-9">
      <div className="lg:space-y-3">
        <h1 className="font-bold text-4xl">Our Recent Blog Posts</h1>
        <p>
          Explore our vibrant collection of recent blog posts, where we share
          insights, stories, and ideas on a <br /> variety of topics. Stay
          up-to-date with our latest musings and join the conversation!
        </p>
      </div>

      {/* this div is for map the cart */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-28">
        {loading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#2563EB">
            <Skeleton count={3} baseColor="#D1D5DB"></Skeleton>
          </SkeletonTheme>
        ) : (
          blogs.map((blog) => <RecBlog key={blog._id} blog={blog}></RecBlog>)
        )}
      </div>
      <Link to="/allblogs">
        <button className="btn text-white font-bold mt-10 px-7 py-3 bg-blue-600">
          All Blogs
        </button>
      </Link>
    </div>
  );
};

export default RecentBlogs;

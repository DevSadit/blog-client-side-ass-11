import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <div className="navbar shadow-sm lg:px-44 bg-gray-900 text-white">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <Link to="/">
            <span className="font-extrabold text-xl">ZenZap</span>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user && (
            <li>
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>
          )}
          <li>
            <Link to="/allblogs">
              <div>All Blogs</div>
            </Link>
          </li>
          <li>
            <Link to="/featuredBlogs">
              <div>Featured Blogs</div>
            </Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">
                <div>LogIn</div>
              </Link>
            </li>
          )}
        </ul>
        <div className="dropdown  dropdown-end z-50">
          {user && (
            <div
              tabIndex={0}
              role="button"
              className="btn w-8 lg:w-10 btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
          )}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] bg-gray-900 p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/myblogs">
                <div>My Blogs</div>
              </Link>
            </li>
            <li>
              <Link to="/addblogs">
                <div>Add Blogs</div>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <div>Wishlist</div>
              </Link>
            </li>
            <li className="mt-2">
              <button
                onClick={logOut}
                className="bg-gray-200 block text-center"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

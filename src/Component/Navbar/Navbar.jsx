import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result, "successfully log out");
      })
      .catch((error) => console.error(error));
  };
  const navlink = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </>
  );
  return (
    <div className="flex mr-5">
      <nav className="mx-auto block w-full max-w-screen-xl    py-2 px-4 text-white   backdrop-saturate-200 lg:px-8 lg:py-4">
        <div>
          <div className="container mx-auto flex justify-between items-center text-gray-900">
            <div className="flex flex-row-reverse gap-2 items-center">
              <a
                href="#"
                className="mr-4 block cursor-pointer py-1.5 font-sans text-white text-3xl font-bold leading-normal text-inherit antialiased"
              >
                <i>T</i>a<i>R</i>a|S
              </a>
              <img
                className="h-14 w-14 rounded-full"
                src="https://i.ibb.co/xGNbhsJ/assortment-leaves-flowers-white-background.jpg"
              ></img>
            </div>
            <ul className="hidden items-center gap-6 lg:flex text-white text-3xl mr-10 font-bold">
              {navlink}
            </ul>
          </div>
          <div
            className="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
            data-collapse="navbar"
          >
            <div className="container mx-auto pb-2">
              <ul className="mt-2 mb-4 flex flex-col gap-2 text-3xl font-bold">
                {navlink}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex gap-3 items-center">
        <FaUserAlt className="text-3xl text-white"></FaUserAlt>

        {user ? (
          <>
            <span className="text-white">{user.photoUrl}</span>
            <button
              onClick={handleSignout}
              className="btn btn-outline bg-red-200 px-10 border-none mr-3"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline bg-red-200 px-10 border-none mr-3">
              LogIn
            </button>
          </Link>
        )}
      </div>
      {/* <div className="navbar-end">
        {user ? (
          <>
           
            <a onClick={handleSignout} className="btn">
              Log Out
            </a>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">Log In</button>
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;

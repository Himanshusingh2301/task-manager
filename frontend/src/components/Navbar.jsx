import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const baseStyle =
    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200";

  const activeStyle = "bg-green-400 text-black shadow-md";
  const inactiveStyle = "text-gray-600 hover:text-black";

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="bg-gray-200 rounded-full px-4 py-2 flex gap-4 shadow-md">

        {/* Always visible */}
        {token && (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Tasks
            </NavLink>
          </>
        )}

        {/* Not logged in */}
        {!token && (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
              }
            >
              Register
            </NavLink>
          </>
        )}

        {/* Logout button */}
        {token && (
          <button
            onClick={handleLogout}
            className={`${baseStyle} bg-red-500 text-white hover:bg-red-400`}
          >
            Logout
          </button>
        )}

      </div>
    </div>
  );
};

export default Navbar;
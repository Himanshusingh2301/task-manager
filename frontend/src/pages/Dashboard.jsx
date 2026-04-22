import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [totalTasks, setTotalTasks] = useState(0);

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    email: "user@example.com",
  };

  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      setTotalTasks(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar/>
      <div className="max-w-2xl mx-auto mt-20 bg-white p-6 rounded-xl shadow-md">

        {/* Single Card Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT: User Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome, {user.name}
            </h1>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {/* RIGHT: Total Tasks */}
          <div className="bg-blue-100 px-6 py-4 rounded-lg text-center min-w-[150px]">
            <h3 className="text-lg font-semibold">Total Tasks</h3>
            <p className="text-3xl font-bold mt-2">{totalTasks}</p>
          </div>

        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/tasks"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Go to Tasks
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
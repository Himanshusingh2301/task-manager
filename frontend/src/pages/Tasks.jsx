import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useEffect } from "react";

const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    if (!form.title) return;

    try {
      if (editIndex !== null) {
        const taskId = tasks[editIndex]._id;

        await axiosInstance.put(`/tasks/${taskId}`, form);
      } else {
        await axiosInstance.post("/tasks", form);
      }

      fetchTasks();
      setForm({ title: "", description: "" });
      setEditIndex(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    const task = tasks.find((t) => t._id === id);

    if (!task) return;

    setForm({
      title: task.title,
      description: task.description,
    });

    setEditIndex(tasks.indexOf(task));
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Task Manager
        </h2>

        {/* Form */}
        <form onSubmit={handleAddOrUpdate} className="flex flex-col gap-3 mb-6">

          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={form.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Task description"
            value={form.description}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg"
          />

          <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>

        </form>

        {/* Task List */}
        <div className="flex flex-col gap-3">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet</p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg flex justify-between items-start"
              >
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-600">
                    {task.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(task._id)}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Tasks;
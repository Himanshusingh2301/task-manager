import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute>
          <Tasks />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

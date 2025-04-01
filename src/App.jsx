import React from "react";
import Login from "./components/Auth/Login";
import EmplyoyeeDashboard from "./components/Dashboard/EmplyoyeeDashboard";
import TaskListNumber from "./components/other/TaskListNumber";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  return (
    <div className="">
      {/* <Login /> */}
      {/* <EmplyoyeeDashboard /> */}
      <AdminDashboard />
    </div>
  );
};

export default App;

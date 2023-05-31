import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./login-pages/ErrorPage";
import Dashboard from "./routes/Dashboard";
import Shop from "./routes/Shop";
import Tasks from "./routes/Tasks";
import Pet from "./routes/Pet";
import Settings from "./routes/Settings";
import LoginPage from "./login-pages/LoginPage";
// import Navbar from "./components/navbar/Navbar";
// import SignUpPage from "./login-pages/SignUpPage";
// import ForgotPasswordPage from "./login-pages/ForgotPasswordPage";
// import LoginPage from "./login-pages/LoginPage";

// TODO: Update Root Path

function MyApp() {
  return (
    <>
      <Navigation />
      <h1>React Router</h1>
      <Routes>
        {/* <Route index element={<Landing />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="shop" element={<Shop />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="pet" element={<Pet />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
const Navigation = () => (
  <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/pet">My Pet</Link>
    <Link to="/settings">Settings</Link>
  </nav>
);
export default MyApp;

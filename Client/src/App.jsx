import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/layouts/SideBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Categories from "./pages/Categories/Categories";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Setting/Setting";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-bg">
          <Sidebar />
        <main className="min-w-0 w-full lg:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
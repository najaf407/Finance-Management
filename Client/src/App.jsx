import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layouts/SideBar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <main className="min-h-screen bg-bg md:ml-64 pb-20 md:pb-0">
        {/* Your page content */}
      </main>
    </BrowserRouter>
  );
}

export default App;
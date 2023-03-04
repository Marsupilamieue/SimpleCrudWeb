import Userlist from "./components/userlist/userList";
import Adduser from "./components/adduser/addUser";
import Edituser from "./components/edituser/editUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="justify-center flex text-white">
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/edit/:id" element={<Edituser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

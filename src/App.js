import { TopBar } from "./components/topbar/TopBar";
import { Home } from "./components/pages/home/Home";
import { Single } from "./components/pages/single/Single";
import { Write } from "./components/pages/write/Write";
import { Settings } from "./components/pages/settings/Settings";
import { Login } from "./components/pages/login/Login";
import { Register } from "./components/pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user=false;
  return (
    <Router>
     <TopBar/>
     <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/register" element={<Register />}/>
        <Route  path="/post/single/:postId" element={<Single />}/>
        <Route  path="/post/write" element={<Write />}/>
        <Route  path="/settings" element={<Settings />}/>
        <Route  path="/login" element={<Login />}/>
      </Routes>     
    </Router>
  );
}

export default App;

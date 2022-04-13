import Navbar from "./components/Navbar";
import Login from "./components/Login";
import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;

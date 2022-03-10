import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="App">
      <Particles />
      <MyNavbar />
      <Header />
    </div>
  );
}

export default App;

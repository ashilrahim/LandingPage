// src/App.jsx
import './App.css'
import  Navigation from "./components/Navigation";
import Home from "./pages/Home";





const App = () => {
  return (
    <div>
      <Navigation />
      <main >
        <Home />
      </main>
    </div>
  );
};

export default App;

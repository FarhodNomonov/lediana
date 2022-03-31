import "./App.css";
import RootRoute from "./components/routes/index";
import Header from "./components/header/index";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RootRoute />
      <Footer />
    </div>
  );
}

export default App;

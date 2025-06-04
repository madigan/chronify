import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col container w-xl m-auto min-h-screen bg-neutral-content shadow-sm">
      <Header />
      <main className="flex flex-1 flex-col">
        <p className="bg-amber-400 p-4 text-center">
          🚧 Under construction... 🚧
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

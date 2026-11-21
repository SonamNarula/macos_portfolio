
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dock from "./components/Dock";

const App = () => {
    return (
        <main className="relative h-screen w-full overflow-hidden">
            <Navbar />
            <Home />
            <Dock />
        </main>
    );
};

export default App;

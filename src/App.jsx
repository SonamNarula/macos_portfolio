import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dock from "./components/Dock";
import Finder from "./windows/Finder";

const App = () => (
    <main className="relative h-screen w-full overflow-hidden">
        <Navbar />
        <Home />
        <Dock />
        <Finder />
    </main>
);

export default App;
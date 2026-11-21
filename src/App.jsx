
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dock from "./components/Dock";

import {
    Safari,
    Finder,
    Terminal,
    Contact,
    Photos,
    Resume,
    Text,
    Image,
} from "./windows";

const App = () => {
    return (
        <main className="relative h-screen w-full overflow-hidden">
            <Navbar />
            <Home />
            <Dock />

            <Safari />
            <Finder />
            <Terminal />
            <Contact />
            <Photos />
            <Resume />
            <Text />
            <Image />
        </main>
    );
};

export default App;

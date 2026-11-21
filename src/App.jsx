import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dock from "./components/Dock";
import Welcome from "./components/Welcome";

import Safari from "./windows/Safari";
import Finder from "./windows/Finder";
import Terminal from "./windows/Terminal";
import Contact from "./windows/Contact";
import Photos from "./windows/Photos";
import Resume from "./windows/Resume";
import Text from "./windows/Text";
import Image from "./windows/Image";

const App = () => {
    return (
        <main className="relative h-screen w-full overflow-hidden">
            <Navbar />
            <Home />
            <Welcome />
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
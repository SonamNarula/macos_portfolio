import Navbar from "./components/Navbar";

const App = () => {
    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            <Navbar />

            <div className="flex min-h-screen items-center justify-center text-white">
                <h1 className="text-4xl font-bold">
                    Welcome to SonamOS.
                </h1>
            </div>
        </main>
    );
};

export default App;
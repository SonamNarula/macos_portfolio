
import useWindowStore from "../store/window";
import useLocationStore from "../store/location";

const desktopItems = [
    { name: "About Me", location: "about", type: "folder", side: "left", row: 0 },
    { name: "Projects", location: "projects", type: "folder", side: "left", row: 1 },
    { name: "Experience", location: "experience", type: "folder", side: "left", row: 2 },
    { name: "Resume", location: "resume", type: "file", side: "right", row: 0 },
    { name: "Contact", location: "contact", type: "app", side: "right", row: 1 },
    { name: "Terminal", location: "terminal", type: "app", side: "right", row: 2 },
];

const FolderIcon = () => (
    <svg
        viewBox="0 0 88 72"
        width="76"
        height="62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="folder-front" x1="44" y1="18" x2="44" y2="67">
                <stop stopColor="#91DCFF" />
                <stop offset="1" stopColor="#39A9F5" />
            </linearGradient>
            <linearGradient id="folder-back" x1="20" y1="5" x2="55" y2="35">
                <stop stopColor="#B4E9FF" />
                <stop offset="1" stopColor="#68C7FA" />
            </linearGradient>
        </defs>

        <path
            d="M7 17C7 12.6 10.6 9 15 9H34L43 20H75C79.4 20 83 23.6 83 28V57C83 61.4 79.4 65 75 65H15C10.6 65 7 61.4 7 57V17Z"
            fill="url(#folder-back)"
        />
        <path
            d="M5 29C5 24.6 8.6 21 13 21H75C79.4 21 83 24.6 83 29V57C83 61.4 79.4 65 75 65H13C8.6 65 5 61.4 5 57V29Z"
            fill="url(#folder-front)"
        />
        <path
            d="M7 29C7 25.7 9.7 23 13 23H75C78.3 23 81 25.7 81 29"
            stroke="#D8F4FF"
            strokeOpacity=".65"
            strokeWidth="1.5"
        />
    </svg>
);

const DesktopItem = ({ item, onOpen }) => {
    const isFolder = item.type === "folder";

    return (
        <button
            type="button"
            onDoubleClick={() => onOpen(item)}
            onKeyDown={(event) => {
                if (event.key === "Enter") onOpen(item);
            }}
            className="
        absolute flex h-[100px] w-[104px]
        flex-col items-center justify-start gap-1
        rounded-lg p-1
        text-center
        transition-colors duration-150
        hover:bg-white/15
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-white/70
      "
            style={{
                left: item.side === "left" ? "20px" : undefined,
                right: item.side === "right" ? "20px" : undefined,
                top: `${24 + item.row * 122}px`,
            }}
            aria-label={`Double-click to open ${item.name}`}
        >
            {isFolder ? (
                <FolderIcon />
            ) : item.type === "file" ? (
                <img
                    src="/images/pdf.png"
                    alt=""
                    className="h-[62px] w-[76px] object-contain drop-shadow-lg"
                />
            ) : (
                <div className="flex h-[62px] w-[76px] items-center justify-center">
          <span className="text-4xl text-white/90">
            {item.location === "contact" ? "✉" : "›_"}
          </span>
                </div>
            )}

            <span className="max-w-full rounded-sm px-1 text-[12px] font-medium leading-4 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
        {item.name}
      </span>
        </button>
    );
};

const Home = () => {
    const openWindow = useWindowStore((state) => state.openWindow);
    const setActiveLocation = useLocationStore(
        (state) => state.setActiveLocation
    );

    const handleOpen = (item) => {
        if (item.type === "folder") {
            setActiveLocation(item.location);
            openWindow("finder");
            return;
        }

        openWindow(item.location);
    };

    return (
        <section className="absolute inset-0 overflow-hidden">
            {/* Welcome text */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-12">
                <div className="text-center text-white drop-shadow-lg">
                    <p className="mb-3 text-lg font-light tracking-wide sm:text-2xl">
                        Hey, I'm Sonam. Welcome to my
                    </p>

                    <h1 className="text-6xl font-light italic tracking-tight sm:text-8xl">
                        portfolio.
                    </h1>
                </div>
            </div>

            {/* Desktop items */}
            {desktopItems.map((item) => (
                <DesktopItem
                    key={item.location}
                    item={item}
                    onOpen={handleOpen}
                />
            ))}
        </section>
    );
};

export default Home;

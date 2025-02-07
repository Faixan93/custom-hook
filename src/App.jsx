import DarkModeToggle from "./components/useDarkMode/DarkModeToggle";
import SearchBar from "./components/useDebounce/SearchBar";
import SignUpForm from "./components/useFormValidation/SignUpForm";
import GeoLocation from "./components/useGeoLocation/GeoLocation";
import KeyPress from "./components/useKeyPress/KeyPress";
import Counter from "./components/useLocalStorage/Counter";
import Responsive from "./components/useMediaQuery/Responsive";
import Modal from "./components/useModal/Modal";
import PaginatedList from "./components/usePagination/PaginatedList";
import WebSocket from "./components/useWebsocket/WebSocket";

function App() {
  return (
    <>
      <div
        style={{
          height: "350vh",
          width: "95vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Counter />
        <br />
        <br />
        <Responsive />
        <br />
        <br />
        <SignUpForm />
        <br />
        <br />
        <SearchBar />
        <br />
        <br />
        <br />
        <PaginatedList />
        <br />
        <br />
        <br />
        <Modal />
        <br />
        <br />
        <br />
        <WebSocket />
        <br />
        <br />
        <br />
        <GeoLocation />
        <br />
        <br />
        <br />
        <DarkModeToggle />
        <br />
        <br />
        <br />
        <KeyPress />
      </div>
    </>
  );
}

export default App;

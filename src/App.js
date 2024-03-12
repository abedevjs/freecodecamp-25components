// import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import menus from "./components/Tree-view/data";
import ImageSlider from "./components/Image-slider";
import LoadMore from "./components/Load-more";
import RandomColor from "./components/Random-color";
import StarRating from "./components/Star-rating";
import TreeView from "./components/Tree-view";
import QrCodeGenerator from "./components/Qr-code-generator";
import DarkMode from "./components/Dark-mode";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numStars={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      /> */}
      {/* <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      <DarkMode />
    </div>
  );
}

export default App;

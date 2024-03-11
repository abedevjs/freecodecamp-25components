// import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/Image-slider";
import RandomColor from "./components/Random-color";
import StarRating from "./components/Star-rating";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numStars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      />
    </div>
  );
}

export default App;

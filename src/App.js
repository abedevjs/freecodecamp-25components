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
import ScrollIndicator from "./components/Scroll-indicator";
import TabsParent from "./components/Tabs/Tabs-parent";
import ModalParent from "./components/Modal-popup/Modal-parent";
import GithubFinder from "./components/Github-finder";
import SearchAutoComplete from "./components/Search-autocomplete";
import FeatureFlag from "./components/Feature-flag";
import { FeatureContextProvider } from "./components/Feature-flag/context/FeatureContext";
import UseFetch from "./components/Use-fetch/useFetch";
import UseFetchHookTest from "./components/Use-fetch/UseFetch-test";
import UseOnclickOutsideTest from "./components/UseOutside/test";
import UseWindowResponsiveTest from "./components/Use-responsive/test";

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
      {/* <DarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabsParent /> */}
      {/* <ModalParent /> */}
      {/* <GithubFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <FeatureContextProvider>
        <FeatureFlag />
      </FeatureContextProvider> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnclickOutsideTest /> */}
      <UseWindowResponsiveTest />
    </div>
  );
}

export default App;

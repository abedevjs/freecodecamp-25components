import DarkMode from "../Dark-mode";
import GithubFinder from "../Github-finder";
import ImageSlider from "../Image-slider";
import StarRating from "../Star-rating";
import TabsParent from "../Tabs/Tabs-parent";
import { FeatureContextHook } from "./context/FeatureContext";

function FeatureFlag() {
  const { loading, enableFlags } = FeatureContextHook();

  const componentToRender = [
    {
      key: "showDarkMode",
      component: <DarkMode />,
    },
    {
      key: "showImageSlider",
      component: <ImageSlider />,
    },
    {
      key: "showGithubFinder",
      component: <GithubFinder />,
    },
    {
      key: "ShowStarRating",
      component: <StarRating />,
    },
    {
      key: "showTabs",
      component: <TabsParent />,
    },
  ];

  function checkEnableFlags(getCurrentKey) {
    console.log(enableFlags[getCurrentKey]);
    return enableFlags[getCurrentKey];
  }

  if (loading) return <h1>⏳ Loading data...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentToRender.map((component, index) => (
        <div key={index}>
          {checkEnableFlags(component.key) ? component.component : null}
        </div>
      ))}
    </div>
  );
}

export default FeatureFlag;

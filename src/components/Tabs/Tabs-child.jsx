import { useState } from "react";
import "./tabs.css";

function TabsChild({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleOnClick(index)}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
          >
            <span className="label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default TabsChild;

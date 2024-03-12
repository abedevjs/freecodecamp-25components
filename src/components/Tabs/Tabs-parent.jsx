import TabsChild from "./Tabs-child";

function TabsParent() {
  const content = [
    {
      label: "tab 1",
      content: "content tab 1",
    },
    {
      label: "tab 2",
      content: "content tab 2",
    },
    {
      label: "tab 3",
      content: <RandomContent />,
    },
  ];

  //Child to parent communication
  function handleOnChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <TabsChild tabsContent={content} onChange={handleOnChange} />;
}

function RandomContent() {
  return <h1>Some random content</h1>;
}

export default TabsParent;

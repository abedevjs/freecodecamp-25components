import UseWindowResponsive from ".";

function UseWindowResponsiveTest() {
  const windowSize = UseWindowResponsive();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>Use Responsive</h1>
      <p>width is: {width}</p>
      <p>height is: {height}</p>
    </div>
  );
}

export default UseWindowResponsiveTest;

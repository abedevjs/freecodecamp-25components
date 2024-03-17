import { useRef } from "react";

const data = [
  {
    label: "First Card",
    style: {
      width: "100%",
      height: "600px",
      background: "red",
    },
  },
  {
    label: "Second Card",
    style: {
      width: "100%",
      height: "600px",
      background: "grey",
    },
  },
  {
    label: "Third Card",
    style: {
      width: "100%",
      height: "600px",
      background: "blue",
    },
  },
  {
    label: "Fourth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "green",
    },
  },
  {
    label: "Fifth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "orange",
    },
  },
];

function ScrollToSection() {
  const ref = useRef();
  function handleClick() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll To Section</h1>
      <button onClick={handleClick}>Click To Scroll</button>
      {data.map((el, index) => (
        <div ref={index === 4 ? ref : null} style={el.style}>
          <h3>{el.label}</h3>
        </div>
      ))}
    </div>
  );
}

export default ScrollToSection;

import { useRef } from "react";
import UseFetch from "../Use-fetch/useFetch";

function ScrollToTopAndBottom() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div>
      <h1>ScrollToTopAndBottom</h1>
      <h3>This is TOP</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((product, index) => (
              <li key={index}>{product.title}</li>
            ))
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}>
        <h3>This is Bottom</h3>
      </div>
    </div>
  );
}

export default ScrollToTopAndBottom;

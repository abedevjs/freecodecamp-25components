import { useEffect, useState } from "react";
import "./styles.css";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProductArray((currentData) => [...currentData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (productArray && productArray.length === 100) setDisableButton(true);
  }, [productArray]);

  console.log(productArray);

  if (loading) return <div>⏳ Loading data...</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {productArray && productArray.length
          ? productArray.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
}

export default LoadMore;

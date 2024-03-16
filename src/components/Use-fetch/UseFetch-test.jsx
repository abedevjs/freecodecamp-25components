import UseFetch from "./useFetch";

function UseFetchHookTest() {
  const { data, error, pending } = UseFetch(
    "https://dummyjson.com/products",
    {}
  );
  return (
    <div>
      {pending ? <h1>Pending data</h1> : <h1>UseFethcHokkTest</h1>}
      {error && <h1>{error}</h1>}
      {data && data.products && data.products.length
        ? data.products.map((product, index) => (
            <p key={index}>{product.title}</p>
          ))
        : null}
    </div>
  );
}

export default UseFetchHookTest;

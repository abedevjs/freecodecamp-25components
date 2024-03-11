import { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function ImageSlider({ url, page, limit }) {
  const [imagesArray, setImagesArray] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) setImagesArray(data);

      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) return <div>⏳ Loading Data! Please wait</div>;
  if (errorMsg !== null) return <div>💥 Error occurred {errorMsg}</div>;

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? imagesArray.length - 1 : currentSlide - 1
    );
  }
  function handleNext() {
    setCurrentSlide(
      currentSlide === imagesArray.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {imagesArray && imagesArray.length
        ? imagesArray.map((image, index) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {imagesArray && imagesArray.length
          ? imagesArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "current-indicators"
                    : "current-indicators inactive-indicators"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;

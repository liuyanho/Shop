import { useState } from "react";

function ImageSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="image-slider">
      <button className="slider-btn left" onClick={prevImage}>
        ‹
      </button>

      <img src={images[currentIndex]} alt={`${title} ${currentIndex + 1}`} />

      <button className="slider-btn right" onClick={nextImage}>
        ›
      </button>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={currentIndex === index ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
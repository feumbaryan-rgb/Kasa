import { useState } from 'react'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1
        ? 0
        : currentIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0
        ? pictures.length - 1
        : currentIndex - 1
    )
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt="logement"
        className="slideshow__image"
      />

      {pictures.length > 1 && (
        <>
          <button
            className="slideshow__prev"
            onClick={prevSlide}
          >
            ❮
          </button>

          <button
            className="slideshow__next"
            onClick={nextSlide}
          >
            ❯
          </button>

          <p className="slideshow__count">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Slideshow
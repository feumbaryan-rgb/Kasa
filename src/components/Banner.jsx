import bannerImage from '../assets/images/banner.png'

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={bannerImage}
        alt="bannière"
      />

      <h1 className="banner__title">
        Chez vous, partout et ailleurs
      </h1>
    </div>
  )
}

export default Banner
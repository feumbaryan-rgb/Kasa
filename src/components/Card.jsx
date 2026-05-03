function Card({ title, cover }) {
    return (
      <article className="card">
        <img className="card__image" src={cover} alt={title} />
        <h2 className="card__title">{title}</h2>
      </article>
    )
  }
  
  export default Card
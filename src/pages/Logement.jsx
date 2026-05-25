import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Collapse from '../components/Collapse.jsx'
import Slideshow from '../components/Slideshow.jsx'

function Logement() {
  const { id } = useParams()

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" replace />
  }

  return (
    <main>
      <Slideshow pictures={logement.pictures} />

      <div className="logement__header">
        <div>
          <h1>{logement.title}</h1>

          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="host">
          <div className="host__info">
            <p>{logement.host.name}</p>

            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host__picture"
            />
          </div>

          <div className="rating">
  {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      className={
        star <= Number(logement.rating)
          ? 'star active'
          : 'star'
      }
    >
      ★
    </span>
  ))}
</div>
        </div>
      </div>

      <p>{logement.description}</p>
      <div className="logement__collapses">
  <Collapse
    title="Description"
    content={logement.description}
  />

  <Collapse
    title="Équipements"
    content={
      <ul>
        {logement.equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>
    }
  />
</div>
    </main>
  )
}

export default Logement
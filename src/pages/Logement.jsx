import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Collapse from '../components/Collapse.jsx'

function Logement() {
  const { id } = useParams()

  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return (
      <main>
        <h1>Logement introuvable</h1>
      </main>
    )
  }

  return (
    <main>
      <img
        src={logement.cover}
        alt={logement.title}
        className="logement__cover"
      />

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
            {'★'.repeat(logement.rating)}
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
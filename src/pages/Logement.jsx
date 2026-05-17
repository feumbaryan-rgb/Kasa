import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'

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
    </main>
  )
}

export default Logement
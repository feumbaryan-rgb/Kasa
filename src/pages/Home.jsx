import Card from '../components/Card.jsx'
import logements from '../data/logements.json'

function Home() {
  return (
    <main>
      <h1>Page d'accueil</h1>

      {logements.map((logement) => (
        <Card key={logement.id} />
      ))}
    </main>
  )
}

export default Home
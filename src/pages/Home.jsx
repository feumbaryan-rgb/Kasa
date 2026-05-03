import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import logements from '../data/logements.json'

function Home() {
  return (
    <main>
      <Banner />

      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
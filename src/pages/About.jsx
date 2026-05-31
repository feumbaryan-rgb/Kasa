import Collapse from '../components/Collapse'

function About() {
  return (
    <main>
      <div className="about">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale."
        />

        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa."
        />

        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite."
        />

        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa."
        />
      </div>
    </main>
  )
}

export default About
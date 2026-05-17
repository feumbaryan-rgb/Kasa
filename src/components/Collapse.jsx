import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>

        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="collapse__content">
          {content}
        </div>
      )}
    </div>
  )
}

export default Collapse
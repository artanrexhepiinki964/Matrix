import { ReactElement } from 'react'

export interface WhyItem {
  /** Feature title */
  title: string
  /** Short description */
  text: string
}

/**
 * Section explaining why clients choose Matrix.
 */
export default function WhyMatrix(): ReactElement {
  const items: WhyItem[] = [
    { title: 'AI Expertise', text: 'Specialized agents automate complex workflows.' },
    { title: 'Integrated Services', text: 'Design, development and marketing under one roof.' },
    { title: 'Scalable Automation', text: 'Solutions that grow with your business.' },
  ]

  return (
    <section className="bg-white py-12" aria-labelledby="why-heading">
      <div className="container mx-auto px-4">
        <h2 id="why-heading" className="text-3xl font-bold text-center mb-8">Why Matrix</h2>
        <ul className="grid gap-6 md:grid-cols-3" role="list">
          {items.map((i) => (
            <li key={i.title} className="border rounded-lg p-6" role="listitem">
              <h3 className="text-xl font-semibold mb-2">{i.title}</h3>
              <p className="text-gray-600">{i.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

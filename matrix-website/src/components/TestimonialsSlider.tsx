"use client"
import { useState } from 'react'

export interface Testimonial {
  /** Quote text */
  quote: string
  /** Author name */
  author: string
}

const testimonials: Testimonial[] = [
  { quote: 'Matrix elevated our brand beyond expectations.', author: 'Acme Corp' },
  { quote: 'The automation workflow saved us countless hours.', author: 'Startup XYZ' },
  { quote: 'Impressive results and seamless communication.', author: 'Real Estate Co.' },
]

/**
 * Simple testimonial carousel with next/previous controls.
 */
export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  const t = testimonials[index]

  return (
    <section className="bg-white py-12" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
      <div className="text-center max-w-xl mx-auto">
        <p className="italic mb-4">"{t.quote}"</p>
        <p className="font-semibold">{t.author}</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button type="button" onClick={prev} aria-label="Previous testimonial" className="px-3 py-1 border rounded hover:bg-gray-100">Prev</button>
          <button type="button" onClick={next} aria-label="Next testimonial" className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
        </div>
      </div>
    </section>
  )
}

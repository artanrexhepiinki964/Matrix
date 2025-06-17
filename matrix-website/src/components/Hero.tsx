import Link from 'next/link'

/**
 * Hero section with tagline and call-to-action.
 */
export default function Hero() {
  return (
    <section className="relative py-20 text-center bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Automation Meets Creativity</h1>
        <p className="text-lg text-gray-600 mb-8">Fully AI-driven digital agency solutions for modern brands.</p>
        <Link href="/contact" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring">Get Started</Link>
      </div>
    </section>
  )
}

import FeatureCard from './FeatureCard'

/**
 * Grid list of primary services.
 */
export default function ServicesGrid() {
  const services = [
    { title: 'Design', description: 'UI/UX and brand identity crafted by AI precision.', href: '/services#design' },
    { title: 'Development', description: 'Web and mobile solutions with automated workflows.', href: '/services#development' },
    { title: 'Marketing', description: 'Data-driven strategies for growth and engagement.', href: '/services#marketing' },
  ]

  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="services-heading">
      <h2 id="services-heading" className="text-3xl font-bold text-center mb-8">What We Do</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <FeatureCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}

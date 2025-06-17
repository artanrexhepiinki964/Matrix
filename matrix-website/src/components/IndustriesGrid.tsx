import { ReactElement } from 'react'

export interface Industry {
  /** Industry title */
  title: string
  /** CTA link */
  href: string
}

/**
 * Grid of industries served.
 */
export default function IndustriesGrid(): ReactElement {
  const industries: Industry[] = [
    { title: 'eCommerce', href: '/contact?sector=ecommerce' },
    { title: 'SaaS', href: '/contact?sector=saas' },
    { title: 'Real Estate', href: '/contact?sector=real-estate' },
    { title: 'Startups', href: '/contact?sector=startups' },
  ]

  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="industries-heading">
      <h2 id="industries-heading" className="text-3xl font-bold text-center mb-8">Industries</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {industries.map((i) => (
          <a key={i.title} href={i.href} className="block border rounded-lg p-6 text-center hover:shadow" aria-label={`Learn more about ${i.title}`}>{i.title}</a>
        ))}
      </div>
    </section>
  )
}

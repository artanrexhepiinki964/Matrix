import ServicesGrid from '../../components/ServicesGrid'

/** Services page */
export default function ServicesPage() {
  return (
    <>
      <section className="container mx-auto px-4 py-12" aria-labelledby="services-heading">
        <h1 id="services-heading" className="text-3xl font-bold text-center mb-8">Our Services</h1>
      </section>
      <ServicesGrid />
    </>
  )
}

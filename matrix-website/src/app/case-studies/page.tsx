import CaseStudyCard, { CaseStudy } from '../../components/CaseStudyCard'

/** Case Studies page */
export default function CaseStudiesPage() {
  const studies: CaseStudy[] = [
    { title: 'E-Shop Growth', result: '+150% sales', quote: 'Matrix transformed our online presence.' },
    { title: 'SaaS Launch', result: '2000 signups', quote: 'Automation handled it all.' },
  ]

  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="case-heading">
      <h1 id="case-heading" className="text-3xl font-bold text-center mb-8">Case Studies</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {studies.map((s) => (
          <CaseStudyCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}

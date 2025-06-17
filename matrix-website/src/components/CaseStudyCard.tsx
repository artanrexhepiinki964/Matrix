export interface CaseStudy {
  /** Case study title */
  title: string
  /** Brief metric summary */
  result: string
  /** Customer quote */
  quote: string
}

/**
 * Card displaying case study highlights.
 */
export default function CaseStudyCard({ title, result, quote }: CaseStudy) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{result}</p>
      <blockquote className="italic">"{quote}"</blockquote>
    </div>
  )
}

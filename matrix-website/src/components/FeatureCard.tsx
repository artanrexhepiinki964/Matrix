export interface FeatureCardProps {
  /** Title of the feature */
  title: string
  /** Short feature description */
  description: string
  /** Link to learn more */
  href: string
}

/**
 * Display a feature summary card.
 */
export default function FeatureCard({ title, description, href }: FeatureCardProps) {
  return (
    <div className="border rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={href} className="text-purple-600 hover:underline focus-visible:underline">Learn more</a>
    </div>
  )
}

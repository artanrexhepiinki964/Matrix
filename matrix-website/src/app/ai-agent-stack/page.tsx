/** AI Agent Stack page */
export default function AIAgentStackPage() {
  const agents = [
    { name: 'SEO Agent', desc: 'Optimizes content for search engines.' },
    { name: 'Dev Agent', desc: 'Automates coding tasks and deployments.' },
    { name: 'Design Agent', desc: 'Generates visuals and UI components.' },
  ]

  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="stack-heading">
      <h1 id="stack-heading" className="text-3xl font-bold text-center mb-8">AI Agent Stack</h1>
      <div className="space-y-6">
        {agents.map((a) => (
          <div key={a.name} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{a.name}</h2>
            <p className="text-gray-600">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

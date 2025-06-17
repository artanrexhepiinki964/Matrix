/** Blog index page */
export default function BlogPage() {
  const posts = [
    { slug: 'welcome', title: 'Welcome to Matrix', summary: 'Introducing our AI-driven agency.' },
  ]

  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="blog-heading">
      <h1 id="blog-heading" className="text-3xl font-bold text-center mb-8">Blog</h1>
      <ul className="space-y-4" role="list">
        {posts.map((p) => (
          <li key={p.slug} role="listitem">
            <a href={`/blog/${p.slug}`} className="text-xl font-semibold hover:underline">
              {p.title}
            </a>
            <p className="text-gray-600">{p.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

interface BlogPageProps {
  params: { slug: string }
}

/** Single blog post page */
export default function BlogPostPage({ params }: BlogPageProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post: {params.slug}</h1>
    </section>
  )
}

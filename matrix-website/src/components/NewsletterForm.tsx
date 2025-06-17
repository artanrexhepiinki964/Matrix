"use client"
/**
 * Newsletter subscription form.
 */
export default function NewsletterForm() {
  return (
    <form className="mt-4 flex max-w-md mx-auto" action="/api/newsletter" method="post">
      <label htmlFor="email" className="sr-only">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="flex-grow border p-2 rounded-l-md focus:outline-none"
        placeholder="Your email"
      />
      <button type="submit" className="bg-purple-600 text-white px-4 rounded-r-md hover:bg-purple-700 focus-visible:ring">Subscribe</button>
    </form>
  )
}

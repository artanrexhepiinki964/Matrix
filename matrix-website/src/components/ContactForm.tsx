"use client"

/**
 * Accessible contact form component.
 */
export default function ContactForm() {
  return (
    <form className="space-y-4" method="post" action="/api/contact">
      <label className="block">
        <span className="sr-only">Name</span>
        <input
          type="text"
          name="name"
          required
          className="mt-1 block w-full border p-2"
          placeholder="Your name"
        />
      </label>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          type="email"
          name="email"
          required
          className="mt-1 block w-full border p-2"
          placeholder="you@example.com"
        />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          className="mt-1 block w-full border p-2"
          placeholder="How can we help?"
        />
      </label>
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus-visible:ring">
        Submit
      </button>
    </form>
  )
}

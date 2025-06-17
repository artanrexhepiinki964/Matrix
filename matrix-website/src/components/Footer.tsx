import NewsletterForm from './NewsletterForm'

/** Footer component with newsletter sign-up */
export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 p-6 text-center space-y-4">
      <NewsletterForm />
      <p className="text-sm">© {new Date().getFullYear()} Matrix Design Studio & Labs</p>
    </footer>
  )
}

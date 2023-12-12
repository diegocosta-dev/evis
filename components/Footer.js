import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="mb-8 w-full border border-gray-200" />

      <div className="grid w-full max-w-2xl grid-cols-1 pb-16 sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="text-gray-500 transition hover:text-gray-600">
            Home
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/news" className="text-gray-500 transition hover:text-gray-600">
            News
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/contact" className="text-gray-500 transition hover:text-gray-600">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

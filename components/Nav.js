import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="mx-auto my-0 flex w-full max-w-4xl items-center justify-center p-8 md:my-8">
      <div>
        <Link href="/" className="p-1 text-gray-900 hover:underline sm:p-4">
          Home
        </Link>
        <Link href="/news" className="p-1 text-gray-900 hover:underline sm:p-4">
          News
        </Link>
        <Link href="/contact" className="p-1 text-gray-900 hover:underline sm:p-4">
          Contact
        </Link>
      </div>
    </nav>
  )
}

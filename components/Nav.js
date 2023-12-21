import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-10 py-5">
      <div>
        <Link href="/" className="">
          Logo Here
        </Link>
      </div>
      <div className='flex items-center gap-[30px]'>
        <Link href="/" className="text-gray-700 transition-all hover:text-blue">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 transition-all hover:text-blue">
          About
        </Link>
        <Link href="/blog" className="text-gray-700 transition-all hover:text-blue">
          Blog
        </Link>
        <Link href="/contact" className="rounded bg-blue p-[14px] text-white transition-all hover:bg-ligth-blue">
          Contact
        </Link>
      </div>
    </nav>
  )
}

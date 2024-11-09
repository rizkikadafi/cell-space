import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="flex items-center">
      <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
        <Link href="#" className="py-2 px-6 flex">
          Home
        </Link>
        <Link href="#" className="py-2 px-6 flex">
          Course
        </Link>
        <Link href="#" className="py-2 px-6 flex">
          Product
        </Link>
        <Link href="#" className="py-2 px-6 flex">
          Contact
        </Link>
        <Link href="#" className="py-2 px-6 flex">
          Carrier
        </Link>
      </nav>
      <button className="lg:hidden flex flex-col ml-4">
        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
        </span>
        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
        </span>
        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
        </span>
      </button>
    </div>
  );
}

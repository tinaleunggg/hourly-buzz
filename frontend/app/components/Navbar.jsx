import SearchBar from './SearchBar'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
        <Link href="/">Houtly Buzz</Link>
        <SearchBar/>
        <Link href="#">Sign up</Link>
        <Link href="#">Log in</Link>
    </nav>
  )
}

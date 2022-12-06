import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <header className="  flex justify-between p-4  items-center w-full h-[70px] bg-[#1a2d45]">
        <div className="text-3xl font-bold text-white pl-4 ">
          <Link href="/">NextEvent</Link>
        </div>
        <ul>
          <li className="pr-20 text-white text-2xl ">
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default NavBar

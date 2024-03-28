import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost test-lg">
            Bhartics Cars
          </Link>
          <ul className="flex">
            <li>
              <Link href="/newcar" className="btn btn-ghost test-lg">
                New Car
              </Link>
            </li>
            <li>
              <Link href="/preownedcar" className="btn btn-ghost test-lg">
                Preowned Car
              </Link>
            </li>

            <li>
              <Link href="/cart" className="btn btn-ghost test-lg">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/signin" className="btn btn-ghost test-lg">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

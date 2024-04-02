'use client'
import useCartService from '@/lib/hooks/useCartStore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Menu = () => {
  const { items } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="flex flex-col">
      <ul className="flex items-stretch">
        <li>
          <Link href="/newcar" className="btn btn-ghost test-lg">
            New Car
          </Link>
        </li>
        <li>
          <Link href="/" className="btn btn-ghost test-lg">
            Preowned Car
          </Link>
        </li>

        <li>
          <Link href="/cart" className="btn btn-ghost test-lg">
            Cart
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link href="/signin" className="btn btn-ghost test-lg">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu

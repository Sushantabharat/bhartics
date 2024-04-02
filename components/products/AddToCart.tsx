'use client'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddtoCart({ item }: { item: OrderItem }) {
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setexistItem] = useState<OrderItem | undefined>()
  useEffect(() => {
    setexistItem(items.find((x) => x.slug === item.slug))
  }, [items, item.slug])
  const addToCartHandler = () => {
    increase(item)
  }
  return existItem ? (
    <div>
      <button className="btn" type="button" onClick={() => decrease(existItem)}>
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button className="btn btn-primary w-full" onClick={addToCartHandler}>
      Add to cart
    </button>
  )
}
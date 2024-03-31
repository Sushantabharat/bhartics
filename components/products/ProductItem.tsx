import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={'/product/${product.slug}'}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={'/product/${product.slug}'}>
          <h3 className="text-xl font-bold">{product.name}</h3>
        </Link>
        <p className="card-text">{product.description}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>
    </div>
  )
}

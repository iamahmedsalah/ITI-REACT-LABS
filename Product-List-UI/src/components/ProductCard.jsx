import React, { useState } from 'react'
import { Star, Heart, Info, ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="relative bg-white rounded-xl p-3 border border-slate-100 flex flex-col gap-3">
      <img className="w-full h-44 object-cover rounded-md" src={product.image} alt={product.name} />
      <button className="absolute top-3 right-3 bg-white p-1 rounded-full border border-slate-200">
        <Heart size={16} className="text-rose-500" />
      </button>
      <div className="flex-1 flex flex-col">
        <div className="font-semibold text-sm">{product.name}</div>
        <div className="flex items-center justify-between text-sm text-slate-600 mt-2">
          <div className="flex items-center gap-1">
            <Star size={14} color="#f59e0b" />
            <span>{product.rating}</span>
            <span className="text-xs text-slate-400">({product.reviews})</span>
          </div>
          <div className="font-bold">${product.price}</div>
        </div>

        <div className="mt-3 flex gap-2">
          <button className="flex-1 py-2 rounded-md cursor-pointer bg-sky-500 text-white text-sm flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            Add to cart
          </button>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className="py-2 px-3 cursor-pointer rounded-md border border-slate-200 text-sm flex items-center gap-2"
          >
            <Info size={14} className="text-sky-500" />
            {open ? 'Hide details' : 'Details'}
          </button>
        </div>

        {open && (
          <div className="mt-3 text-sm text-slate-700 border-t pt-3">
            <div className="flex items-start gap-2 mb-2">
              <Info size={16} className="text-sky-500 mt-0.5" />
              <div className="font-medium">Product details</div>
            </div>
            <div>{product.description}</div>
          </div>
        )}
      </div>
    </article>
  )
}


import { products } from './data/products'
import ProductCard from './components/ProductCard'
import { Search, ShoppingCart } from 'lucide-react'

function App() {
  return (
    <div>
      <header className="flex items-center gap-4 px-4 h-16 bg-white border-b border-slate-100">
        <div className="text-lg font-bold">Product UI</div>
        <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg ml-4">
          <Search size={16} />
          <input className="bg-transparent outline-none" placeholder="Search products..." />
        </div>
        <div className="ml-auto">
          <button className="relative bg-transparent border-none p-2 rounded-lg">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 flex gap-6">
        <aside className="w-48 bg-white rounded-xl p-4 border border-slate-100 hidden md:block">
          <h3 className="text-sm font-semibold mb-2">Categories</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-700">
            <li className="bg-indigo-50 px-3 py-2 rounded">All</li>
            <li className="px-3 py-2 rounded hover:bg-slate-50">Clothing</li>
            <li className="px-3 py-2 rounded hover:bg-slate-50">Accessories</li>
            <li className="px-3 py-2 rounded hover:bg-slate-50">Electronics</li>
          </ul>
        </aside>

        <section className="flex-1">
          <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

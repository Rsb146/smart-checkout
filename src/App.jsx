import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import products from './data/productos'
import CategorySection from './components/CategorySection'
import CartSidebar from './components/CartSidebar'
import SearchBar from './components/SearchBar'
import './App.css'

const CATEGORIES = ['Electrónica', 'Hogar', 'Deportes', 'Ropa']

function CatalogView() {
  const [query, setQuery] = useState('')

  // Normaliza texto para comparar sin acentos ni mayúsculas
  const normalize = (str) =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  const normalizedQuery = normalize(query.trim())

  // Filtra productos que coincidan con nombre o categoría
  const filteredProducts = normalizedQuery
    ? products.filter(p =>
        normalize(p.nombre).includes(normalizedQuery) ||
        normalize(p.category).includes(normalizedQuery)
      )
    : products

  // Categorías que tienen al menos 1 producto tras el filtro
  const activeCategories = CATEGORIES.filter(cat =>
    filteredProducts.some(p => p.category === cat)
  )

  const getProductsByCategory = (cat) =>
    filteredProducts.filter(p => p.category === cat)

  return (
    <div className="app-layout">

      {/* ── Header ──────────────────────────────────────── */}
      <header className="app-header">
        <div className="header-inner">
          <h1 className="brand">🛍️ Smart<span>Checkout</span></h1>
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </header>

      {/* ── Cuerpo ──────────────────────────────────────── */}
      <div className="app-body">

        <main className="catalog">

          {/* Contador de resultados */}
          {normalizedQuery && (
            <p className="results-hint">
              {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''} para <em>"{query}"</em>
            </p>
          )}

          {/* Sin resultados globales */}
          {filteredProducts.length === 0 ? (
            <div className="global-empty">
              <span>😕</span>
              <p>No encontramos productos para <strong>"{query}"</strong></p>
              <small>Intenta con otro término de búsqueda</small>
            </div>
          ) : (
            // Solo renderiza categorías que tienen productos
            activeCategories.map(cat => (
              <CategorySection
                key={cat}
                title={cat}
                products={getProductsByCategory(cat)}
              />
            ))
          )}

        </main>

        {/* ── Carrito lateral ─────────────────────────── */}
        <aside className="cart-aside">
          <div className="cart-sticky">
            <CartSidebar />
          </div>
        </aside>

      </div>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <CatalogView />
    </CartProvider>
  )
}

export default App

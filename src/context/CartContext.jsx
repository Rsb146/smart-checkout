import { createContext, useContext, useReducer, useEffect } from 'react'

// ─── Estado inicial ───────────────────────────────────────────────
const INITIAL_STATE = {
  items: [],
  region: 'general', // 'general' = 16%, 'especial' = 19%
}

// ─── Reducer ──────────────────────────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {

    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, cantidad: i.cantidad + 1 }
              : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, cantidad: 1 }],
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
      }

    case 'UPDATE_QUANTITY': {
      const { id, cantidad } = action.payload
      if (cantidad <= 0) {
        return { ...state, items: state.items.filter(i => i.id !== id) }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.id === id ? { ...i, cantidad } : i
        ),
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    case 'SET_REGION':
      return { ...state, region: action.payload }

    case 'HYDRATE':
      return action.payload

    default:
      return state
  }
}

// ─── Selectores de cálculo ────────────────────────────────────────
export function calcTotals(state) {
  const subtotal = state.items.reduce(
    (acc, item) => acc + item.precio * item.cantidad, 0
  )
  const ivaRate = state.region === 'especial' ? 0.19 : 0.16
  const iva = subtotal * ivaRate
  const total = subtotal + iva
  return { subtotal, ivaRate, iva, total }
}

// ─── Context ──────────────────────────────────────────────────────
const CartContext = createContext(null)
const STORAGE_KEY = 'smart_checkout_cart'

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  // Recuperar sesión previa al montar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        dispatch({ type: 'HYDRATE', payload: JSON.parse(saved) })
      }
    } catch {
      // Si el JSON está corrupto, ignoramos y arrancamos limpio
    }
  }, [])

  // Sincronizar con LocalStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

// ─── Hook de consumo ──────────────────────────────────────────────
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}

import { useState } from 'react'
import { useCart, calcTotals } from '../context/CartContext'
import CheckoutModal from './CheckoutModal'
import styles from './CartSidebar.module.css'

function CartSidebar() {
  const { state, dispatch } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)
  const { subtotal, ivaRate, iva, total } = calcTotals(state)

  const handleQty = (id, cantidad) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, cantidad } })

  const handleRemove = (id) =>
    dispatch({ type: 'REMOVE_ITEM', payload: id })

  const handleRegion = (e) =>
    dispatch({ type: 'SET_REGION', payload: e.target.value })

  // ── Empty State ────────────────────────────────────────────────
  if (state.items.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>🛒</span>
        <p className={styles.emptyTitle}>Tu carrito está vacío</p>
        <p className={styles.emptyHint}>Agrega productos del catálogo para empezar</p>
      </div>
    )
  }

  return (
    <>
      <div className={styles.sidebar}>
        <h3 className={styles.heading}>
          🛒 Mi Carrito
          <span className={styles.count}>{state.items.reduce((a, i) => a + i.cantidad, 0)}</span>
        </h3>

        {/* Lista de ítems */}
        <ul className={styles.list}>
          {state.items.map(item => (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemTop}>
                <span className={styles.itemName}>{item.nombre}</span>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemove(item.id)}
                  aria-label="Eliminar"
                >✕</button>
              </div>

              <div className={styles.itemBottom}>
                <div className={styles.qtyControls}>
                  <button onClick={() => handleQty(item.id, item.cantidad - 1)}>−</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => handleQty(item.id, item.cantidad + 1)}>+</button>
                </div>
                <span className={styles.itemSubtotal}>
                  ${(item.precio * item.cantidad).toLocaleString('es-MX')}
                </span>
              </div>
              <small className={styles.unitPrice}>
                ${item.precio.toLocaleString('es-MX')} c/u
              </small>
            </li>
          ))}
        </ul>

        {/* Selector de región / IVA */}
        <div className={styles.regionRow}>
          <label htmlFor="region" className={styles.regionLabel}>Región</label>
          <select
            id="region"
            value={state.region}
            onChange={handleRegion}
            className={styles.regionSelect}
          >
            <option value="general">General (IVA 16%)</option>
            <option value="especial">Zona especial (IVA 19%)</option>
          </select>
        </div>

        {/* Resumen */}
        <div className={styles.summary}>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString('es-MX')}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>IVA ({(ivaRate * 100).toFixed(0)}%)</span>
            <span>${iva.toLocaleString('es-MX', { maximumFractionDigits: 2 })}</span>
          </div>
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>${total.toLocaleString('es-MX', { maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <button className={styles.checkoutBtn} onClick={() => setShowCheckout(true)}>
          Finalizar compra →
        </button>
        <button className={styles.clearBtn} onClick={() => dispatch({ type: 'CLEAR_CART' })}>
          Vaciar carrito
        </button>
      </div>

      {showCheckout && (
        <CheckoutModal total={total} onClose={() => setShowCheckout(false)} />
      )}
    </>
  )
}

export default CartSidebar

import { useState } from 'react'
import { useCart } from '../context/CartContext'
import styles from './CheckoutModal.module.css'

// ─── Validaciones ─────────────────────────────────────────────────
const VALIDATORS = {
  nombre: {
    regex: /^[A-Za-zÀ-ÿ\s]{3,60}$/,
    msg: 'Ingresa tu nombre completo (solo letras, mínimo 3 caracteres)',
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    msg: 'Ingresa un correo válido (ej. usuario@dominio.com)',
  },
  tarjeta: {
    regex: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/,
    msg: 'Ingresa los 16 dígitos de tu tarjeta',
  },
}

const INITIAL_FORM = { nombre: '', email: '', tarjeta: '' }

function CheckoutModal({ total, onClose }) {
  const { dispatch } = useCart()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}
    for (const field in VALIDATORS) {
      if (!VALIDATORS[field].regex.test(form[field])) {
        newErrors[field] = VALIDATORS[field].msg
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Limpiar error en tiempo real al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Simulación de procesamiento de pago
    setSuccess(true)
    dispatch({ type: 'CLEAR_CART' })
  }

  // ── Vista de éxito ─────────────────────────────────────────────
  if (success) {
    return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <div className={styles.successView}>
            <span className={styles.successIcon}>✅</span>
            <h3>¡Pedido confirmado!</h3>
            <p>Tu compra por <strong>${total.toLocaleString('es-MX', { maximumFractionDigits: 2 })}</strong> ha sido procesada.</p>
            <p className={styles.successEmail}>Te enviamos la confirmación a <em>{form.email}</em></p>
            <button className={styles.submitBtn} onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>Finalizar Compra</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <p className={styles.totalPreview}>
          Total a pagar: <strong>${total.toLocaleString('es-MX', { maximumFractionDigits: 2 })}</strong>
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Nombre */}
          <div className={styles.fieldGroup}>
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ej. María García López"
              className={errors.nombre ? styles.inputError : ''}
            />
            {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="usuario@correo.com"
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          {/* Tarjeta */}
          <div className={styles.fieldGroup}>
            <label htmlFor="tarjeta">Número de tarjeta</label>
            <input
              id="tarjeta"
              name="tarjeta"
              type="text"
              value={form.tarjeta}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className={errors.tarjeta ? styles.inputError : ''}
            />
            {errors.tarjeta && <span className={styles.error}>{errors.tarjeta}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Confirmar pago →
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutModal

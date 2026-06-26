import { useCart } from '../context/CartContext'
import styles from './ProductCard.module.css'

function StarRating({ rate }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={n <= Math.round(rate) ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
      <span className={styles.rateNum}>{rate}</span>
    </div>
  )
}

function ProductCard({ product }) {
  const { dispatch } = useCart()

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.imagen} alt={product.nombre} className={styles.image} />
        <span className={styles.badge}>{product.category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.nombre}</h3>
        <StarRating rate={product.rating.rate} />
        <p className={styles.reviews}>{product.rating.count} opiniones</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            ${product.precio.toLocaleString('es-MX')}
          </span>
          <button className={styles.btn} onClick={handleAdd}>
            + Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

import ProductCard from './ProductCard'
import styles from './CategorySection.module.css'

function CategorySection({ title, products }) {
  // App.jsx ya garantiza que solo se renderiza si products.length > 0
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default CategorySection

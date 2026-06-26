# 🛍️ Smart-Checkout

Proyecto Final — Curso de Desarrollo Front-End · ITC · Semestre 25-26 B

## Descripción

Aplicación de carrito de compras **Offline-First** construida con React.js. Permite agregar productos al carrito, ajustar cantidades, aplicar IVA regional y completar un proceso de pago con validación de formularios.

## Tecnologías

- **React 18** + Vite
- **Context API + useReducer** para estado global
- **LocalStorage** para persistencia offline-first
- **CSS Modules** para estilos encapsulados
- Sin dependencias externas de UI

## Funcionalidades implementadas

| Requerimiento | Estado |
|---|---|
| Arquitectura de componentes (atomic) | ✅ |
| Context + useReducer (estado global) | ✅ |
| CRUD del carrito (agregar, eliminar, actualizar cantidad) | ✅ |
| Cálculo de subtotal, IVA (16% / 19% por región) y total | ✅ |
| Persistencia en LocalStorage (sincronización y recuperación) | ✅ |
| Búsqueda en tiempo real por nombre y categoría | ✅ |
| Validación de formulario de checkout (Nombre, Email, Tarjeta) | ✅ |
| Empty States (carrito vacío, sin resultados de búsqueda) | ✅ |
| Interfaz responsiva (móvil y escritorio) | ✅ |

## Ejecutar localmente

```bash
# 1. Clona o descomprime el proyecto
cd smart-checkout

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Construir para producción / GitHub Pages

```bash
npm run build
# Los archivos quedan en /dist, listos para deploy
```

Para GitHub Pages, agrega en `vite.config.js`:
```js
base: '/nombre-del-repo/'
```

## Estructura del proyecto

```
src/
├── context/
│   └── CartContext.jsx      # Reducer + Provider + hook useCart
├── components/
│   ├── ProductCard.jsx      # Tarjeta de producto atómica
│   ├── CategorySection.jsx  # Sección por categoría con empty state
│   ├── CartSidebar.jsx      # Panel del carrito con IVA y acciones
│   ├── CheckoutModal.jsx    # Modal de pago con validación
│   └── SearchBar.jsx        # Buscador en tiempo real
├── data/
│   └── productos.js         # Datos de los 20 productos
├── App.jsx                  # Composición principal + filtro global
└── App.css                  # Estilos globales y layout
```

## Notas sobre imágenes

El proyecto usa URLs de placeholder para las imágenes. Para usar tus imágenes originales, reemplaza los valores de `imagen` en `src/data/productos.js` por los imports correspondientes de `src/assets/images/`.

---
*Proyecto desarrollado para el curso ITC · 2026*

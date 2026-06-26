import product1  from '../assets/images/audifonos.webp'
import product2  from '../assets/images/cable.webp'
import product3  from '../assets/images/puerto.jpg'
import product4  from '../assets/images/teclado.webp'
import product5  from '../assets/images/mouse.webp'
import product6  from '../assets/images/cafetera.webp'
import product7  from '../assets/images/cuchillos.jpg'
import product8  from '../assets/images/aspiradora.jpg'
import product9  from '../assets/images/licuadora.webp'
import product10 from '../assets/images/sabanas.webp'
import product11 from '../assets/images/bicicleta.webp'
import product12 from '../assets/images/box.webp'
import product13 from '../assets/images/Mancuerna.webp'
import product14 from '../assets/images/yoga.webp'
import product15 from '../assets/images/cuerda.webp'
import product16 from '../assets/images/chaqueta.webp'
import product17 from '../assets/images/calcetines.webp'
import product18 from '../assets/images/sudadera.webp'
import product19 from '../assets/images/tenis.webp'
import product20 from '../assets/images/gorra.webp'
const productos = [
  {
     id: 1,  
     nombre: 'Audífonos Bluetooth Pro',
     precio: 15000, 
     category: 'Electrónica', 
     imagen: product1,    
     rating: { 
      rate: 4.8, count: 125 
    } 
  },
  { 
    id: 2,  
    nombre: 'Cable USB-C Trenzado',           
    precio: 500,    
    category: 'Electrónica', 
    imagen: product2, 
    rating: { 
      rate: 4.3, count: 89  
    } 
  },
  { id: 3,  
    nombre: 'Hub USB 4 Puertos',              
    precio: 1200,   
    category: 'Electrónica', 
    imagen: product3,      
    rating: { 
      rate: 4.5, count: 210 
    } 
  },
  { id: 4,  
    nombre: 'Teclado Mecánico TKL',           
    precio: 15000,  
    category: 'Electrónica', 
    imagen: product4,      
    rating: { 
      rate: 4.7, count: 340 
    } 
  },
  { id: 5,  
  nombre: 'Mouse Inalámbrico Ergonómico', 
  precio: 500,    
  category: 'Electrónica', 
  imagen: product5,        
  rating: { 
    rate: 4.2, count: 67  
  } 
},
  { id: 6,  
    nombre: 'Cafetera de Goteo Digital',      
    precio: 65000,  category: 'Hogar',       
    imagen: product6,     
    rating: { 
      rate: 4.6, count: 98 
    } 
  },
  { id: 7,  
    nombre: 'Set de Cuchillos Chef 3 pzas',   
    precio: 700,    
    category: 'Hogar',       
    imagen: product7,    
    rating: { 
      rate: 4.9, count: 150 
    } 
  },
  { id: 8,  
    nombre: 'Aspiradora Ciclónica 2000W',     
    precio: 8200,   
    category: 'Hogar',       
    imagen: product8,   
    rating: { 
      rate: 4.4, count: 77  
    } 
  },
  { id: 9,  
    nombre: 'Licuadora de Alta Potencia',     
    precio: 95000,  
    category: 'Hogar',       
    imagen: product9,    
    rating: { 
      rate: 4.8, count: 203 
    } 
  },
  { id: 10, 
    nombre: 'Juego de Sábanas Microfibra',    
    precio: 1000,   
    category: 'Hogar',       
    imagen: product10,      
    rating: { 
      rate: 4.1, count: 55  
    } 
  },
  { id: 11, 
    nombre: 'Bicicleta de Montaña Rin 29"',   
    precio: 115000, category: 'Deportes',    
    imagen: product11,    
    rating: { 
      rate: 4.7, count: 188 
    } 
  },
  { id: 12, 
    nombre: 'Guantes de Box Pro',             
    precio: 1500,   
    category: 'Deportes',    
    imagen: product12,      
    rating: { 
      rate: 4.5, count: 92  
    } 
  },
  { id: 13, 
    nombre: 'Mancuernas Ajustables 20kg',     
    precio: 1200,   
    category: 'Deportes',    
    imagen: product13,   
    rating: { 
      rate: 4.6, count: 134 
    } 
  },
  { id: 14, 
    nombre: 'Colchoneta Yoga Antideslizante', 
    precio: 15000,  
    category: 'Deportes',    
    imagen: product14,   
    rating: { 
      rate: 4.3, count: 60  
    } 
  },
  { id: 15, 
    nombre: 'Cuerda para Saltar Veloz',       
    precio: 500,    
    category: 'Deportes',    
    imagen: product15,       
    rating: { 
      rate: 4.0, count: 45  
    } 
  },
  { id: 16, 
    nombre: 'Chamarra Impermeable Unisex',    
    precio: 65000,  
    category: 'Ropa',        
    imagen: product16,     
    rating: { 
      rate: 4.8, count: 310 
    } 
  },
  { id: 17, 
    nombre: 'Calcetines Deportivos Pack x6',  
    precio: 700,    
    category: 'Ropa',        
    imagen: product17,   
    rating: { 
      rate: 4.2, count: 230 
    } 
  },
  { id: 18, 
    nombre: 'Sudadera con Capucha Oversized', 
    precio: 18200,  
    category: 'Ropa',        
    imagen: product18,     
    rating: { 
      rate: 4.5, count: 178 
    } 
  },
  { id: 19, 
    nombre: 'Tenis Running Ultraboost',       
    precio: 195000, category: 'Ropa',        
    imagen: product19,        
    rating: { 
      rate: 4.9, count: 450 
    } 
  },
  { id: 20, 
    nombre: 'Gorra Snapback Ajustable',       
    precio: 2000,   
    category: 'Ropa',        
    imagen: product20,        
    rating: { 
      rate: 4.1, count: 89  
    } 
  },
]

export default productos

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartSidebar from "./CartSidebar";

// ─── Datos de prueba ────────────────────────────────────────────────────────
const cartConProductos = [
  { id: 1, nombre: "audifonos bluetooth", precio: 15000, cantidad: 2 },
  { id: 2, nombre: "teclado mecánico",    precio: 8000,  cantidad: 1 },
];

const cartVacio = [];

// ─── Pruebas ─────────────────────────────────────────────────────────────────
describe("Componente CartSidebar", () => {

  // Prueba 1 — getByText + toBeInTheDocument
  // Verifica que el título del carrito se renderiza correctamente
  test("muestra el título Mi carrito en el componente", () => {
    render(
      <CartSidebar
        cart={cartConProductos}
        onUpdateQuantity={jest.fn()}
        onRemove={jest.fn()}
      />
    );
    expect(screen.getByText("🛒 Mi carrito")).toBeInTheDocument();
  });

  // Prueba 2 — queryByText + toBeInTheDocument (carrito vacío)
  // Verifica que el mensaje de vacío aparece cuando no hay productos
  test("muestra el mensaje de carrito vacío cuando no hay productos", () => {
    render(
      <CartSidebar
        cart={cartVacio}
        onUpdateQuantity={jest.fn()}
        onRemove={jest.fn()}
      />
    );
    expect(
      screen.queryByText("Tu carrito está vacío.")
    ).toBeInTheDocument();
  });

  // Prueba 3 — getByText + toBeInTheDocument (nombre de producto)
  // Verifica que el nombre de un producto del carrito se muestra correctamente
  test("muestra el nombre del producto dentro del carrito", () => {
    render(
      <CartSidebar
        cart={cartConProductos}
        onUpdateQuantity={jest.fn()}
        onRemove={jest.fn()}
      />
    );
    expect(screen.getByText("audifonos bluetooth")).toBeInTheDocument();
  });

  // Prueba 4 — getByRole + toBeInTheDocument (botón Finalizar compra)
  // Verifica que el botón de finalizar compra existe cuando hay productos
  test("el botón Finalizar compra existe cuando el carrito tiene productos", () => {
    render(
      <CartSidebar
        cart={cartConProductos}
        onUpdateQuantity={jest.fn()}
        onRemove={jest.fn()}
      />
    );
    expect(
      screen.getByRole("button", { name: /finalizar compra/i })
    ).toBeInTheDocument();
  });

  // Prueba 5 — click + jest.fn (botón eliminar)
  // Verifica que al hacer click en ✕ se ejecuta la función onRemove
  test("al hacer click en el botón eliminar se ejecuta la función onRemove", () => {
    const onRemoveMock = jest.fn();
    render(
      <CartSidebar
        cart={cartConProductos}
        onUpdateQuantity={jest.fn()}
        onRemove={onRemoveMock}
      />
    );
    const botonesEliminar = screen.getAllByRole("button", { name: "✕" });
    fireEvent.click(botonesEliminar[0]);
    expect(onRemoveMock).toHaveBeenCalledTimes(1);
    expect(onRemoveMock).toHaveBeenCalledWith(1);
  });

});

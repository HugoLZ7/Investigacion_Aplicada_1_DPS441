import { createContext, useState } from "react";

// Crear contexto
export const AppContext = createContext();

export function AppProvider({ children }) {
  // Usuario logueado
  const [user, setUser] = useState(null);

  // Usuarios registrados (simulado en memoria)
  const [usuarios, setUsuarios] = useState([]);

  // Equipos disponibles con stock
  const [equipos, setEquipos] = useState([
    {
      nombre: "Laptop Dell",
      stock: 3,
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      nombre: "Proyector Epson",
      stock: 1,
      img: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    },
    {
      nombre: "Tablet Samsung",
      stock: 2,
      img: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    },
  ]);

  // Historial de préstamos activos
  const [historial, setHistorial] = useState([]);

  // Registro de devoluciones
  const [devoluciones, setDevoluciones] = useState([]);

  // Registrar usuario
  const registrarUsuario = (nuevo) => {
    setUsuarios((prev) => [...prev, nuevo]);
  };

  // Login con validación
  const loginUsuario = (carnet, password) => {
    const encontrado = usuarios.find(
      (u) => u.carnet === carnet && u.password === password
    );

    if (encontrado) {
      setUser(encontrado);
      return true;
    }
    return false;
  };

  // Registrar préstamo y descontar stock
  const registrarPrestamo = (nombreEquipo) => {
    const equipo = equipos.find((e) => e.nombre === nombreEquipo);
    if (!equipo || equipo.stock === 0) return;

    // Descontar stock
    setEquipos((prev) =>
      prev.map((e) =>
        e.nombre === nombreEquipo ? { ...e, stock: e.stock - 1 } : e
      )
    );

    // Agregar al historial
    const nuevoPrestamo = {
      id: Date.now(),
      nombre: nombreEquipo,
      img: equipo.img,
      fecha: new Date().toLocaleDateString(),
      usuario: user?.nombre,
    };

    setHistorial((prev) => [...prev, nuevoPrestamo]);
  };

  // Devolver equipo
  const devolverEquipo = (id) => {
    const prestamo = historial.find((item) => item.id === id);
    if (!prestamo) return;

    // Aumentar stock
    setEquipos((prev) =>
      prev.map((e) =>
        e.nombre === prestamo.nombre
          ? { ...e, stock: e.stock + 1 }
          : e
      )
    );

    // Registrar devolución
    const registro = {
      ...prestamo,
      fechaDevolucion: new Date().toLocaleDateString(),
    };

    setDevoluciones((prev) => [...prev, registro]);

    // Eliminar del historial activo
    setHistorial((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        registrarUsuario,
        loginUsuario,
        equipos,
        registrarPrestamo,
        historial,
        devolverEquipo,
        devoluciones,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

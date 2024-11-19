import { Link, useLocation } from "react-router-dom"

export default function Navigation() {
  const location = useLocation()
  const path = location.pathname

  return (
    <nav>
      {path === "/"
        ? <Link to="/create">Crear tarea</Link>
        : <Link to="/">Inicio</Link>
      }
    </nav>
  )
}

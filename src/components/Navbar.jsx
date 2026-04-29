import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1a1a2e" }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span style={{ fontSize: "28px" }}>🏛️</span>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "18px", lineHeight: "1.1" }}>Музеї Світу</div>
            <div style={{ fontSize: "11px", color: "#aaa", letterSpacing: "1px" }}>ІНФОРМАЦІЙНИЙ ПОРТАЛ</div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-1">
            {[
              { path: "/", label: "🏠 Головна" },
              { path: "/about", label: "ℹ️ Про сайт" },
              { path: "/gallery", label: "🖼️ Галерея" },
              { path: "/news", label: "📰 Новини" },
              { path: "/contacts", label: "📬 Контакти" },
            ].map(link => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link px-3 rounded ${location.pathname === link.path ? "active bg-white bg-opacity-25" : ""}`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import { Link } from "react-router-dom"
export default function cabecalho() {
  return (
    <>
    <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            {/* <li><Link to="/editar/produtos/:id">Editar Produtos</Link></li> */}
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
    </header>
    </>
  )
}

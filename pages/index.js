import Link from 'next/link'

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/collection">Coleções</Link>
          <Link href="/product">Produto</Link>
        </nav>
      </header>

      <main className="hero">
        <h1>Drops Exclusivos</h1>
        <p>Loja exemplo — preto & branco</p>
      </main>

      <section className="products">
        <div className="grid">
          <div className="card">
            <img src="/placeholder-1.png" alt="produto"/>
            <h3>Camiseta Premium</h3>
            <p>R$ 199,90</p>
          </div>
          <div className="card">
            <img src="/placeholder-2.png" alt="produto"/>
            <h3>Hoodie Classic</h3>
            <p>R$ 249,90</p>
          </div>
          <div className="card">
            <img src="/placeholder-3.png" alt="produto"/>
            <h3>Boné Street</h3>
            <p>R$ 89,90</p>
          </div>
        </div>
      </section>

      <footer className="footer">© 2025 Sua Marca</footer>
    </div>
  )
}

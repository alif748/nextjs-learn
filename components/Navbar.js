import Link from 'next/link'
import Head from 'next/head'

export default function Navbar(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top nav" id="nav">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">ALIF</a>

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-content-end kanan" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/projects">
                  <a className="nav-link " aria-current="page">Projects</a>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="loading"></div>
    </>
  )
}

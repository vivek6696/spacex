import React from 'react'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  img_1">
  <div className="container-fluid">
    <a className="navbar-brand"  href="#"><img className='rounded' style={{"width":"110px"}} src='pics/logo.jpg'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fs-5 fw-medium" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Update</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#'>About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
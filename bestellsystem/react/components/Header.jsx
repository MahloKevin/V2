
function Header() {
    <header className="header_section bg-black">
        <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
                <a className="navbar-brand" href="index.html">
            <span>
              Mahlo
            </span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a draggable="false" className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a draggable="false" className="nav-link" href="menu.html">Produkte</a>
                        </li>
                        <li className="nav-item">
                            <a draggable="false" className="nav-link" href="about.html">Über uns</a>
                        </li>
                        <li class="nav-item">
                            <a draggable="false" className="nav-link" href="login.html">
                                <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a draggable="false" className="nav-link active" href="shopping_cart.html">
                                <i className="fa-solid fa-shopping-cart fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
}

export default Header;

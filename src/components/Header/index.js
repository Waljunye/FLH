import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
     <header>
         <section className="header-content">
             <Link className="logo-link" to="/">
                 <div className="logo">
                    <p>Lawyers<br/>Better</p>
                 </div>
             </Link>
             <section className="nav-section">
                 <Link className="link nav-button" to="/casesAndCategories" id="nav-1"><p>Случаи и Категории</p></Link>
                 <Link className="link nav-button" to="/form"><div id="nav-2"><p>Заполнить форму</p></div></Link>
             </section>
         </section>
     </header>
    )
}
export default Header;
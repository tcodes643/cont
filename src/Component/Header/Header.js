import React from "react";
import "./Header.css";

function Header(){
    return(
        <div className="container">
            <header className="header">
                <div className="header-left">
                    <span>Wyzsze Szkoly Bankowe</span>
                </div>
                <div className="header-right">
                    <div className="header-right-top">
                        <div>
                            <span>Go to the university's wbair: WSB Group</span>
                        </div>
                        <nav>
                            <a href="">contact</a>
                            <a href="">For media</a>
                            <a href="">Module</a>
                            <a href="">Extranet</a>
                            <a href="">Online registration</a>
                            <span>PL</span>
                        </nav>
                    </div>
                    <div className="header-right-bottom">
                        <ul>
                            <li>Meet WSB</li>
                            <li>Studies and training</li>
                            <li>Cooperation with business</li>
                            <li>Blog</li>
                            <li>
                                <i className="fa fa-search"></i>
                                <span>Search</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;
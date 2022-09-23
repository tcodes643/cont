import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
        <div className="footer-top">
            <div className="">
                <p>We are here:</p>
                <div>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            <div className="">
                <span className="">For media</span>
                <span className="">Personal data protection</span>
                <span className="">Extranet</span>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-flex">
                <div>
                <p>WSB</p>
                <ul>
                    <li>Meet WSB</li>
                    <li>Cooperation with business</li>
                    <li>contact</li>
                </ul>
                </div>
                <div>
                <p>Studies and training</p>
                <ul>
                    <li>First degree studies</li>
                    <li>Second-cycle studies</li>
                    <li>Second-cycle and post-graduate studies</li>
                    <li>Long-cycle studies</li>
                    <li>Postgraduate studies</li>
                </ul>
                </div>
                <div>
                <p>.</p>
                <ul>
                    <li>MBA and EMBA studies</li>
                    <li>Doctorate</li>
                    <li>University of Every Age</li>
                    <li>Training and courses</li>
                    <li>Transfer from another university</li>
                </ul>
                </div>
                <div>
                <p>Go to the university's website:</p>
                <div className="cont">
                    <div>
                        <span>WSB Group</span>
                        <span></span>
                    </div>
                    <div>
                        <i className="fa fa-angle-down"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;
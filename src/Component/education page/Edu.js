import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./edu.css";

function Edu(){
    return(
        <div>
            <Header />
            <div className="pay-flex">
                <div className="pay-flex-left">
                    <div className="div-cont_1">
                        <div>
                            <h2>Education</h2>
                            <p>higher education institution you graduated from</p>
                        </div>
                        <form className="" action="" method="POST">
                            <label for="">
                                <input type="text" placeholder="LOCATION" />
                            </label>
                            <label for="">
                                <input type="text" placeholder="NAME OF HIGER EDUCATION INSTITUTION" />
                            </label>
                            <div className="form-div">
                                <p>Do you have a university degree?</p>
                                <label for="">
                                    <input type="radio" />
                                    <span>Diploma acquired</span>
                                </label>
                                <label for="">
                                    <input type="radio" />
                                    <span>Before Defense</span>
                                </label>
                                <label for="">
                                    <input type="radio" />
                                    <span>Awaiting Diploma</span>
                                </label>
                            </div>
                            <div className="opt">
                                <select>
                                    <option>COUNTRY WHERE SECONDARY EDUCATION CERTIFICATE WAS ISSUED</option>
                                </select>
                            </div>
                        </form>
                        <hr />
                    </div>
                    <div className="div-cont_2">
                        <h1>Firma - discount scheme for business</h1>
                        <form>
                            <label for="">
                                <input type="text" placeholder="COMPANY NAME"/>
                            </label>
                            <label for="">
                                <input type="text" placeholder="NIP TAX IDENTIFICATION NUMBER" />
                            </label>
                            <button type="button" role="button">
                                <span>CONFIRM</span>
                            </button>
                        </form>
                    </div>
                    <div className="div-cont_3">
                        <div>
                            <img src="" alt="" />
                            <span>It will take you up 10 minutes to complete the application form.</span>
                        </div>
                        <div>
                            <button type="button" className="">
                                <span>NEXT EDUCATION & WORK EXPERIENCE</span>
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pay-flex-right">
                    <div className="pay-flex-right-cont">
                        <div className="pay-right-top">
                            <div className="div1">
                                <h2>2022/18/19/POZ/8FBEE9B7D4</h2>
                                <p>Application ID</p>
                            </div>
                            <div className="div2">
                                <h2>WSB Posnan</h2>
                                <p>Selected Location</p>
                            </div>
                            <div className="div3">
                                <h2>Akademia Project Managers</h2>
                                <p>Course/program</p>
                            </div>
                            <button type="" role="button">
                                <i className="fa fa-angle-down"></i>
                                <span>Show more</span>
                            </button>
                        </div>
                        <div className="pay-right-cent">
                            <div className="div1">
                                <div>
                                    <p>tuition fee</p>
                                    <h4>PLN 6250</h4>
                                </div>
                                <div>
                                    <h2>5950 PLN</h2>
                                </div>
                            </div>
                            <div className="div2">
                                <p>Promotional offers</p>
                                <p>Promocia W Szesnym</p>
                            </div>
                        </div>
                            <div className="pay-right-bottom">
                                <h2>Need help?</h2>
                                <p>Give us a phone call</p>
                                <p>+48 52 582 91 00</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="btn-group">
                <button type="" role="button">
                    <span className="">Go back</span>
                </button>
            </div>
            <Footer />
        </div>
    )
}
export default Edu;
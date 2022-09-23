import React from "react";
import "./reg.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Reg(){
    return(
        <div>
            <Header />
                <div className="reg-flex">
                    <div className="reg-left">
                        <div className="reg-cont">
                            <form action="" method="">           
                                <div className="reg-top">
                                    <h2>Essential personal details</h2>
                                    <label for="">
                                        <input type="text" placeholder="FIRST NAME" />
                                    </label>
                                    <label for="">
                                        <input type="text" placeholder="SECOND NAME (OPTIONAL)" />
                                    </label>
                                    <label for="">
                                        <input type="text" placeholder="LAST NAME" />
                                    </label>
                                    <label for="">
                                        <input type="text" placeholder="E-MAIL" />
                                    </label>
                                </div>
                                <div className="reg-cent">
                                    <label for="">
                                        <input type="" />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="reg-right">
                        <div>
                            <div>
                                <h2>WSB Bygoszcz</h2>
                                <p>Selected location</p>
                            </div>
                            <div>
                                <h2>October 2022</h2>
                                <p>start date</p>
                            </div>
                            <div>
                                <h2>Bachelor of science Engineering (7 sem)</h2>
                                <p>level of education</p>
                            </div>
                            <div>
                                <h2>Informatyka w Biznesie/IT in Business</h2>
                                <p>course/program</p>
                            </div>
                            <div>
                                <h2>Web Applications Developer</h2>
                                <p>tentative choice of major (specialization option)</p>
                            </div>
                            <div>
                                <h2>Full Time</h2>
                                <p>mode of study</p>
                            </div>
                            <div>
                                <i className="fa fa-angle-down"></i>
                                <span>show more</span>
                            </div>
                            <button type="button" role="button">
                                <span>FINISH LATER</span>
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </div>
                        <div>
                            <h2>Need help?</h2>
                            <p>Give us a phone call</p>
                            <p>+48 52 582 91 00</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default Reg;
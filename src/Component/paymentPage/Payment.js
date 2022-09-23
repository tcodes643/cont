import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./payment.css";

function Payment(){
    return(
        <div>
            <Header />
                <div className="pay-cont">
                    <div className="pay-flex">
                        <div className="pay-flex-left">
                                <form action="" method="POST">
                                <div className="cont-one">
                                    <h2>Payment Method</h2>
                                    <p>a complete pricelist can be found in our website and in the service contract that will be forwarded to you as soon as you have completed your application form</p>
                                    <div className="label-flex">
                                        <label for="">
                                            <span>PAYMENT SCHEDULE</span>
                                            <select>
                                                <option>Select <i className="fa fa-angle-down"></i></option>
                                            </select>
                                        </label>
                                        <label for="">
                                            <span>NUMBER OF  INSTALLMENT</span>
                                            <select>
                                                <option>1 <i className="fa fa-angle-down"></i></    option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <hr />
                                <div className="promo">
                                    <h1>Promotions</h1>
                                    <p>your eligibility for any discounts and promotions you claimed will be verified by WSB staff in processing your application document</p>
                                    <h2>Promotion offer for WSB</h2>
                                    <label for="">
                                            <input type="checkbox" />
                                        <p>I confirm that i meet the condition of promotion of graduates</p>
                                    </label>
                                </div>
                                <div className="promo-div-two">
                                    <h2>I have a promotional code</h2>
                                    <label for="">
                                        <input type="text" placeholder="ENTER PROMOTIONAL CODE"/>
                                        <button type="button" className="button">
                                            <span>CONFIRM</span>
                                        </button>
                                    </label>
                                    <h2 className="h2">Firma - discount scheme for business</h2>
                                    <div className="lab-cont">
                                        <label className="lab-comp" for="">
                                            <input type="text" placeholder="COMPANY NAME" />
                                        </label>
                                        <label className="lab-nip" for="">
                                            <input type="text" placeholder="NIP TAX IDENTIFICATION NUMBER" />
                                        </label>
                                        <button>
                                            <span>CONFIRM</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="fo-cont">
                                    <div className="div">
                                        <img src="" alt="" />
                                        <p>It will take you up 10 minutes to complete the application form.</p>
                                    </div>
                                    <div className="div2">
                                        <button type="button" role="button">
                                            <span>NEXT: EDUCATION & WORK EXPERIENCE </span><i className="fa fa-angle-right"></i>
                                        </button>
                                    </div>
                                </div>
                                </form>
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
                    <div className="btn">
                        <button type="button" role="button">
                            <span className="">Go back</span>
                        </button>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
export default Payment;
import React from "react";
import Header from "../Header/Header";
import "../signUp/main.css";
import Footer from "../Footer/Footer";
import "./signIn.css";

function signIn(){
    return(
        <div>
            <Header />
            <div className="main">
                <img src="" alt="" />
            </div>
            <div className="signin">
                <div className="signin-flex">
                    <div className="sign-flex-left">
                        <h2>Already have an Applicant's Account?
                            <a href="" hrefLang="">Log in</a>
                        </h2>
                        <p>If you already are a WSB University student or graduate, you can skip Account setup and sign in using your Extranet login and password</p>
                        <form className="sign-form">
                            <label for="">
                                <input type="text" className="username" placeholder="LOGIN (E-MAIL ADDRESS)"/>
                            </label>
                            <label for="">
                                <input type="password" className="password" placeholder="PASSWORD" />
                            </label>
                                <button type="button" role="button">
                                    <span className="">Submit</span>
                                    <i className="fa fa-angle-right"></i>
                                </button>
                        </form>
                    </div>
                    <div className="sign-flex-right">
                        <h2>Do not yet have an Applicant's Account?</h2>
                        <p>Why set up an Applicant's Account?</p>
                        <ul>
                            <li>All of the steps involved in the admission process will be completed online.</li>
                            <li>You will submit application documents, sign your service contract and make payments online - from wherever you are.</li>
                            <li>Check the status and history of your applications.</li>
                        </ul>
                        <div className="btn-grop">
                            <button type="button" className="" aria-label="button">
                                <span>REGISTER</span>
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default signIn;
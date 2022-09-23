import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./signedin.css"

function SignedIn(){
    return(
        <div>
            <Header />
            <div className="signedin">
                <div className="signedin-left">
                    <i className="fa fa-user"></i>
                </div>
                <div className="signedin-right">
                    <h2>ABIOLA ISIAKA</h2>
                    <p>EMAIL ADDRESS</p>
                    <p>ESKAY243@GMAIL.COM</p>
                </div>
            </div>
            <div className="signedIn-cont">
                <div className="signedin-study">
                <h2>Study for a degree now at WSB Universities!</h2>
                </div>
                <div className="signedin-box">
                    <div className="signedin-flex">
                        <div className="box">
                            <div>1</div>
                            <div>Select the course/program you want</div>
                        </div>
                        
                        <div className="box">
                            <div>2</div>
                            <div>Fill out an online application form</div>
                        </div>
                        
                        <div className="box">
                            <div>3</div>
                            <div>Submit all documents and sign your service contract. Do it online via your Applicant's Account.</div>
                        </div>
                        
                        <div className="box">
                            <div>4</div>
                            <div>Entroll now to become a WSB University student!</div>
                        </div>
                    </div>
                    <div className="btn-goup">
                        <button type="button" role="button">
                            <span>SIGN UP ONLINE</span>
                            <i className="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SignedIn;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <div className="footer d-flex">
                <div className="links d-flex">
                <ul className="ul-li">
                    <h5 style={{color : 'white', textDecoration : 'underline'}}>Pages - </h5>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                </ul>

                <div className="address">
                    <h5 style={{color : 'white', textDecoration : 'underline'}}>Contact place - </h5>
                    <p style={{color : 'rgb(224,224,224)'}}>Garia, South 24 Paraganas, <br/> Kolkata - 700103</p>
                </div>

                <div className="socials">
                    <h5 style={{color : 'white', textDecoration : 'underline'}}>Follow us on -</h5>
                    <i className="fab fa-facebook fa-2x"></i>
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-twitter fa-2x"></i>
                    <i className="fas fa-envelope-square fa-2x" style={{margin : '20px', color : 'white', cursor : 'pointer'}}></i>
                </div>
                </div>

                <div className="others">
                    <div className="newsLetter">
                        <h3>Sign up to our daily news letter.</h3>
                        <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Full Name </label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">Please enter your full name here.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign up</button>
                        </form>
                    </div>


                </div>
            </div>
            
        )
    }
}

export default Footer

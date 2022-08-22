import React from 'react'
import logo from "./images/logo.png";
import { useState } from "react";
import "./header.css";
import { Link } from 'react-router-dom'
function Header() {
    // const [display, setdisplay] = useState(false)
    // const show = display ? 'show' : 'hide';

    const [Navshow, setNavshow] = useState(true)
    const open = Navshow ? 'show' : 'hide';

    const [state, setstate] = useState("")
    return (
        <div className='header'>
            <div className="nav_bar">
                <div className="top"></div>
                <div className="row_base">
                    <div className="navigation">
                        <div className="navigation-top">
                            <img src={logo} alt="" srcSet="" />
                            <form className="search">
                                <input type="text" placeholder="Search : Hoodies, Mugs, etc..."/>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </form>
                            <button className="black">Connect to wallet</button>
                            <i className="fa fa-shopping-cart fa-lg"></i>
                        </div>
                        <div className="responsive">
                            <div className=" responce">
                                <div className="burger part" onClick={() => setNavshow(!Navshow)}>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="responsive_image part">
                                    <img src={logo} alt="" srcSet="" />
                                </div>
                                <div className=" responsive_cart part">
                                    <i className="fa fa-shopping-cart fa-lg"></i>
                                </div>
                            </div>
                            <div className="connect">
                                <div className="responce_form">
                                    <form className="search">
                                        <input type="text" placeholder="Search : Hoodies, Mugs, etc..." value={state} onChange={(e) => setstate(e.target.value)} />
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </form>
                                </div>
                                <div className="responce_button">
                                    <button className="black">Connect to wallet</button>
                                </div>
                            </div>
                        </div>
                        <div className={`navigation-bottom ${open}`}>
                            <ul className="nav_item">
                                <li className="nav_link"><Link to='MetalSign'>METAL SIGN</Link></li>
                                <li className="nav_link dropdown_menu"><a>APPAREL<i className="fa fa-caret-down"></i></a></li>
                                    <div className="dropdown">
                                        <ul className="drop">
                                            <li className="drpdn"><Link to='Manwear'>T-SHIRT</Link></li>
                                            <li className="drpdn"><Link to='Hoodie'>HOODIE</Link></li>
                                            <li className="drpdn"><Link to='Ladies'>LADIES T-SHIRT</Link></li>
                                        </ul>
                                    </div>
                                <li className="nav_link"><Link to='Mug'>MUG</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

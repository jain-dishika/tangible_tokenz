import React from 'react'
import { useState } from 'react'
import logo from "./images/logo.png";
import "./footer.css";
function Footer() {
    const [state, setstate] = useState("")
    return (
        <div>
            <section className='footer'>
                <div className="heading my-4">
                    <h5><strong>HAPPY CUSTOMERS</strong> </h5>
                </div>
                <div className="section">
                    <div className="row_basic">
                        <div className=" row footer">
                            <div className="col-md-6 footer-left">
                                <div className="responce_image">
                                    <img src={logo} alt="" srcSet="" />
                                </div>
                                <div className="heading_footer">
                                    <h5> <strong>ENTER YOUR EMAIL TO GET 10% OFF</strong> </h5>
                                </div>
                                <form className=" my-2 email">
                                    <input type="text" className="mail" placeholder="Type Your Email Here" value={state} onChange={(e) => setstate(e.target.value)} />
                                    <button className="offer"> <strong>GIVE ME 10% OFF</strong></button>
                                </form>
                                <div className="heading_footer my-2">
                                    <h5><strong>POPULAR ITEMS</strong> </h5>
                                </div>
                                <div className="pic_item row">
                                    <div className="single_image col-sm-3">
                                        <img src="https://tangibletokens.ropstam.dev/images/9022.png" alt="" srcSet="" />
                                        <span className="mini_name"> T-Shirt</span>
                                    </div>
                                    <div className="single_image col-sm-3">
                                        <img src="https://tangibletokens.ropstam.dev/images/9582.png" alt="" srcSet="" />
                                        <span className="mini_name">Hoodie</span>
                                    </div>
                                    <div className="single_image col-sm-3">
                                        <img src="https://tangibletokens.ropstam.dev/images/9343.png" alt="" srcSet="" />
                                        <span className="mini_name">Ladies T-Shirt</span>
                                    </div>
                                    <div className="single_image col-sm-3">
                                        <img src="https://tangibletokens.ropstam.dev/images/6782.png" alt="" srcSet="" />
                                        <span className="mini_name">Mug</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-6 footer-right">
                                <div className="row footer_content">
                                    <div className="col-sm-6">
                                        <div className="footer_highlight">
                                            <h5><strong>Menu</strong></h5>
                                            <div className="footer_list py-2">
                                                <div className="list"><a href="#">Catalog</a></div>
                                                <div className="list"><a href="#">About Us</a></div>
                                                <div className="list"><a href="#">Home</a></div>
                                                <div className="list"><a href="#">Search</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="footer_highlight ">
                                            <h5><strong>Important Info</strong></h5>
                                            <div className="footer_list py-2">
                                                <div className="list"><a href="#">Contact Us</a></div>
                                                <div className="list"><a href="#">Refund Policy</a></div>
                                                <div className="list"><a href="#">TOS</a></div>
                                                <div className="list"><a href="#">Privacy Policy</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer_image">
                                    <img src={logo} alt="" srcSet="" />
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>Copyright © 2022 Tangible Tonkenz .All Rights Reserved</p>
                            <img src="https://tangibletokens.ropstam.dev/static/media/footer-bottom.26a3ca850a99730009dc.png" alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

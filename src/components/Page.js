import React from "react";
// import { useState } from "react";
import "./Page.css";
// import logo from "./images/logo.png";
import { Link } from 'react-router-dom'
function Page() {
    // const [state, setstate] = useState("")
    return (
        <div className="whole">
            <section>
                <div className="main_image">
                    <img src="https://tangibletokens.ropstam.dev/static/media/bannerhome.08c7bf4f00d8a0f8cc81.jpg" alt="" srcSet="" />
                </div>
            </section>
            <section>
                <div className="heading my-4">
                    <h5><strong>FEATURED PRODUCTS</strong></h5>
                </div>
                <div className="row_basic">
                    <div className="row my-4 image_container">
                        <div className=" my-1 col-sm-3">
                            <Link to='Manwear'>
                                <div className="single_image">
                                    <img className="hover_img1" src="https://tangibletokens.ropstam.dev/images/9021.png" alt="" srcSet="" />
                                    <img className="hover_img2" src="https://tangibletokens.ropstam.dev/images/9022.png" alt="" srcSet="" />
                                </div>
                                <h6 className="py-3 tag"> <strong> MEN'S T-SHIRT</strong></h6>
                            </Link>
                        </div>
                        <div className=" my-1 col-sm-3">
                            <Link to='Ladies'>
                                <div className="single_image">
                                    <img className="hover_img1" src="https://tangibletokens.ropstam.dev/images/9341.png" alt="" srcSet="" />
                                    <img className="hover_img2" src="https://tangibletokens.ropstam.dev/images/9342.png" alt="" srcSet="" />
                                </div>
                                <h6 className="py-3 tag"> <strong> LADIES T-SHIRT</strong></h6>
                            </Link>
                        </div>
                        <div className="my-1 col-sm-3">
                            <Link to='Hoodie'>
                                <div className="single_image">
                                    <img className="hover_img1" src="https://tangibletokens.ropstam.dev/images/9581.png" alt="" srcSet="" />
                                    <img className="hover_img2" src="https://tangibletokens.ropstam.dev/images/9582.png" alt="" srcSet="" />
                                </div>
                                <h6 className="py-3 tag"> <strong>HOODIE</strong></h6>
                            </Link>
                        </div>
                        <div className=" my-1 col-sm-3">
                            <Link to='Mug'>
                                <div className="single_image">
                                    <img className="hover_img1" src="https://tangibletokens.ropstam.dev/images/6781.png" alt="" srcSet="" />
                                    <img className="hover_img2" src="https://tangibletokens.ropstam.dev/images/6782.png" alt="" srcSet="" />
                                </div>
                                <h6 className="py-3 tag"> <strong> 110Z COFFEE MUG</strong></h6>
                            </Link>
                        </div>
                        <div className=" col-sm-3">
                            <Link to='MetalSign'>
                                <div className="single_image">
                                    <img className="hover_img1" src="https://tangibletokens.ropstam.dev/images/5021.png" alt="" srcSet="" />
                                    <img className="hover_img2" src="https://tangibletokens.ropstam.dev/images/5022.png" alt="" srcSet="" />
                                </div>
                                <h6 className="py-3 tag"> <strong> METAL SIGN</strong></h6>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        </div>
    );
}

export default Page;

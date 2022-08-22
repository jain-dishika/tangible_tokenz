import React from 'react'
import { useState } from 'react';
import collection from './collection.json'
import Modal from 'react-modal'
// import Tippy from '@tippyjs/react'
import "./ManWear.css"

Modal.setAppElement('#root')
function Mug() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [creature, setcreature] = useState()

  const [state, setstate] = useState(0)
  const increment = () => {
    setstate(state + 1)
  }
  const decrement = () => {
    if (state > 1) {
      setstate(state - 1)
    }
    else {
      setstate(state)
    }
  }

  const [img, setImg] = useState(collection[3].colors && collection[3].colors[0].image)
  const handleClick = (e) => {
    let a = e.currentTarget.value;
    // console.log(a);
    setImg(collection[3].colors && collection[3].colors[a - 1].image)
  }

  const [imgBtn, setImgBtn] = useState(false)
  const [closebtn, setclosebtn] = useState(true)

  const close_toggle = !closebtn && imgBtn ? 'show' : 'hide';
  const toggle_close = closebtn && !imgBtn ? 'hide' : 'show';

  const [btn, setBtn] = useState(false)
  const handleShow = () => {
    setBtn(btn => !btn)
  }
  let showing = btn ? 'show' : '';
  
  // const [click, setclick] = useState(false)
  // const highlight = click? "click": " "; 
  return (
    <div className='manswear'>
      <div className="row men">
        <div className=" col-sm-6 partion main_image">
          <img src={img} alt="" />
          <div className="radio">
            <div className="small_image">
              <div className="size_container">
                <div className="row pic_changers">
                  {collection[3].colors && collection[3].colors.map(style => {
                    return (
                      <div className="col-sm-3 picture " key={style.id}>
                        <input type="radio" name="color" value={style.id} onChange={handleClick} />
                        <label htmlFor={style.color}><img src={style.image} alt="" srcSet="" /></label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-sm-6 partion main_content">
          <div className="content_head">
            <h5> <strong>{collection && collection[3].name} <br />{collection && collection[3].rupees}</strong></h5>
          </div>
          <hr />
          <div className="content_body">
            <div className="information">

              <div className="row size name">
                <div className="col-sm-2 info-name">
                  <h6>Size</h6>
                </div>
                <div className=" col-sm-10 size-container">
                  <div className="size-elements">
                    {collection[3].size && collection[3].size.map(sizes => {
                      return (
                        <div className="size-element size" key={sizes.id} style={{ background: "#d5d5d5" }}>
                          <input type="radio" name="size" value={sizes.id} />
                          <label htmlFor={sizes.size}>{sizes.size}</label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="row name">
                <div className=" col-sm-2 info-name">
                  <h6>Color</h6>
                </div>
                <div className="col-sm-10 size-container">
                  <div className="size-elements">
                    {collection[3].colors && collection[3].colors.map(rang => {
                      return (
                        <div className="size-element color" key={rang.id} style={{ background: rang.color }}>
                          <input type="radio" name="color" value={rang.id} onChange={handleClick} />
                          <label htmlFor={rang.colorName}></label>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="row quantity name">
                <div className="col-sm-2 info-name">
                  <h6>Quantity</h6>
                </div>
                <div className="col-sm-10 details size-elements">
                  <button className='numbers' onClick={decrement}>-</button>
                  <h4 className='numbers counter'>{state}</h4>
                  <button className='numbers' onClick={increment}>+</button>
                </div>
              </div>
              <button className='btn button_model' onClick={() => setModalIsOpen(true)}>Personalize</button>
              <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{
                overlay: {
                  background: "rgba(0,0,0,.45)",
                  zIndex: 1,
                },
                content: {
                  padding: 0,
                  height: "fit-content",
                  inset: "0",
                  width: "80%",
                  marginTop: "50px",
                  marginLeft: "10%"
                }
              }}>
                <button onClick={() => setModalIsOpen(false)} className="dismiss" data-dismiss="modal">&times;</button>
                <div className="row model">
                  <div className="col-sm-6 modal_image">
                    <img className='big_img' src={img} alt="" srcSet="" />
                    <div className="small_icon">
                      <img src={creature} alt="" srcSet="" />
                    </div>
                  </div>
                  <div className="col-sm-6 modal_content">
                    <h5 >Image Upload 2</h5>
                    <div className="button_content">
                      <button className={`btn model_button`} onClick={handleShow}>Select Image</button>
                      <button className={`btn close ${toggle_close} ${close_toggle}`} onClick={() => { setImgBtn(false); setclosebtn(true); setcreature() }}>X</button>
                    </div>
                    <div className={`row image_icon${showing}`}>
                      {collection[0].icons && collection[0].icons.map(icon => {
                        return (
                          <div className="mini_icons col-sm-3">
                            <img src={icon.icon} alt="" srcSet="" onClick={() => { setcreature(icon.icon); setImgBtn(true); setclosebtn(false); }} />
                          </div>
                        )
                      })}
                    </div>
                    <h5 className='my-2'>Image 41166794653902</h5>
                    <div className="toggle-image">
                      <div className="modal_img">
                        <div className="size-container">
                          <div className="pic_changers">
                            {collection[3].colors && collection[3].colors.map(style => {
                              return (
                                <div className="picture pic" key={style.id}>
                                  <input type="radio" name="color" value={style.id} onChange={handleClick} />
                                  <label htmlFor={style.color}><img src={style.image} alt="" srcSet="" /></label>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="add_cart">
                  <button className='btn cart_btn'><h5>{collection && collection[0].rupees} - ADD TO CART</h5></button>
                </div> */}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mug

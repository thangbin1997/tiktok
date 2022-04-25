import {React, useRef, useState,useEffect} from 'react'
import { AiOutlineDesktop,AiOutlineClose } from 'react-icons/ai'
import { BiMobileAlt } from 'react-icons/bi'
import { TiArrowSortedUp } from 'react-icons/ti'



function GoToTop() {
    const [scrollY, setScrollY]= useState(window.pageYOffset)

const optionRef= useRef()
const btnDowload= useRef()
const btnToTop= useRef(null)

useEffect(() => {
    window.addEventListener("scroll", scrollFunction)
    if(scrollY>0){
        btnToTop.current.style.display= "block"
    }
    else{
        btnToTop.current.style.display= "none"
    }
    return()=>{
        window.removeEventListener('scroll', scrollFunction);
    }
}, [scrollY])

const scrollFunction=()=>{
    setScrollY(window.pageYOffset)
}

const handleDowload=(e)=>{
    optionRef.current.style.display= "block"
    btnDowload.current.style.display= "none"
}
const handleClose=()=>{
    optionRef.current.style.display= "none"
    btnDowload.current.style.display= "block"

}
const handleToTop = () => {
    if (btnToTop && btnToTop.current) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
  return (
    <div className="dowload__button">
        <div className="dowload__button__container">
            <button className='dowload__button__btn' onClick={e=>handleDowload(e)} ref={btnDowload} >
                Tải ứng dụng
            </button>
            <div className="dowload__option--container" ref={optionRef}>
                <div className="dowload__button__dowload-option">
                    <div className="dowload__button__dowload-option-pc">
                        <AiOutlineDesktop className='go-top-icon'/>
                        <span>Tải TikTok dành cho máy tính để bàn</span>
                    </div>
                    <div className="dowload__button__dowload-option-mb">
                        <BiMobileAlt className='go-top-icon'/>
                        <span>Tải ứng dụng TikTok</span>
                    </div>
                </div>
                <div className="dowload__button__dowload-close" onClick={e=>handleClose(e)}>
                        <AiOutlineClose className='go-top-icon'/>
                </div>
            </div>
        </div>
        <button className='go-to-top' onClick={handleToTop} ref={btnToTop}>
            <TiArrowSortedUp className='go-to-top--icon'/>
        </button>
    </div>
  )
}

export default GoToTop
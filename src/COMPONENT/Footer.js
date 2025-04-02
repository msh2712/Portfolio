import React from 'react'
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
  return (
    <div className='w-100 mt-3 pt-4 backfooter text-center footer text-white'>
        <div  className='pt-3 mb-2 pb-1 h3 textlogo'>Portfolio<span className='mshcolour' >msh</span></div>
        <div  className='info px-4'>Yon can connect with me on diffrent platform . so click the below icon and chat with me.</div>
         <div  className='d-flex justify-content-center align-items-center gap-3 my-3 text-black '>
          <a href='https://www.linkedin.com/in/mahesh-patil-ab1259233' ><p className='iconsfooter d-flex align-items-center justify-content-center '><RiLinkedinLine/></p></a>
          <a href='https://www.instagram.com/tare_laine_hu_?igsh=MjFmZG9sZng4bXRj' ><p className='iconsfooter d-flex align-items-center justify-content-center'><IoLogoInstagram/></p></a>
          <a href='https://x.com/mshpatil2712?t=rY2d4doITeLDLR1Eg6qIKQ&s=08' ><p className='iconsfooter d-flex align-items-center justify-content-center'><RiTwitterXFill/></p></a>             
         </div>
         <div className='pb-2 info'><hr></hr> <p>@designed by mahesh patil</p></div>
       
    </div>
  )
}

export default Footer
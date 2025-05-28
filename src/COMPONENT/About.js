import './../CSSFILE/About.css'
import Button from './Button'
import { scrollToSection } from './../utils/scrollToSection'; 

function About() {
  return (
 <section id='about'>
     <div className='w-100 hight my-3 pt-2 pt-md-5 py-2 d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-center d-block d-md-none py-5 textabout'>ABOUT<span>US</span></h1>
               <div className=' h-auto w-100 px-2 px-md-5 home row'>
                   <div className=' aboutss col-12 col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='blob overflow-hidden d-flex align-items-center justify-content-end'>
                    <img src='./icon.png' style={{marginBottom:"-4px"}} className='img-fluid mt-5'></img>
                    </div>
                   </div>
                   <div className=' aboutss col-12 col-md-6 '>
                    <div className=' h-100 d-flex justify-content-center  flex-column'>
                        <h1 className='d-none d-md-block textabout'>ABOUT <span>ME</span></h1>
                        <h5 className='text-center text-md-start mt-4 mt-md-0 msname'>MAHESH PATIL</h5>
                        <p className='info text-center text-md-start'>I Am 24 year old react devloper with 8 months experience. i completed my internship in frontend development living in Surat, Gujarat. currently working in Krishna Software.
                        Connect with me on <a href='https://www.linkedin.com/in/mahesh-patil-ab1259233' >LinkedIn</a>. I am always excited to do business with like-minded people.<br></br>Let's have a discussion over coffee.</p>
                         <p className='d-flex justify-content-center justify-content-md-start' onClick={() => scrollToSection('contact')}><Button text={'HIRE ME'}/></p> 
                    </div>
                   </div>
               </div>
           </div>
 </section>
  ) 
}

export default About
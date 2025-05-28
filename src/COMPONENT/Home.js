import { useState, useEffect } from 'react';
import './../CSSFILE/Home.css';
import { FaReact } from "react-icons/fa";
import Button from './Button';

function Home() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = ' AM FRONTEND DEVELOPER';
    const typingSpeed = 100;
    const deletingSpeed = 100;
    const pauseDuration = 1000;

    useEffect(() => {
        let index = 0;
        let isDeleting = false;

        const type = () => {
            if (isDeleting) {
                setDisplayedText(fullText.substring(0, index));
                index--;
                if (index < 0) {
                    isDeleting = false;
                    index = 0;
                    setTimeout(type, pauseDuration);
                } else {
                    setTimeout(type, deletingSpeed);
                }
            } else {
                setDisplayedText(fullText.substring(0, index));
                index++;
                if (index > fullText.length) {
                    isDeleting = true;
                    setTimeout(type, pauseDuration);
                } else {
                    setTimeout(type, typingSpeed);
                }
            }
        };

        type();

        return () => clearTimeout(type);

    }, []);

    return (
        <div className='w-100 hometext  position-relative m-0 mt-2 d-flex justify-content-center'>
            <div className='home row'>
                <div className='hometext ms col-12 col-md-6 p-0 d-flex flex-column justify-content-end justify-content-md-center'>
                    <div className='abouts'>
                        <p className='h5'><span className='h2'>Hell<span className='h3'><FaReact className='reactjs' /></span></span>, It's Me</p>
                        <h4 className='msh'>MAHESH <span className='patil27'>PATIL</span></h4>
                        <p className='h6 h-md-2'>I{displayedText}</p>
                        <div className='mt-3'>
                            <Button text={'RESUME'} />
                        </div>
                    </div>
                </div>
                <div className='d-none d-md-flex col-6 hometext d-flex justify-content-center align-items-center'>
                    <div className='blobs  overflow-hidden d-flex justify-content-end'>
                        <img src='./icon.png' style={{ marginBottom: "-2px" }} className='img-fluid mt-5'></img>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className="floating-logos-container position-absolute w-100 h-100 d-flex d-md-none">
                <img src="./html.png" className="floating-logo logo1" />
                <img src="./react.png" className="floating-logo logo2" />
                <img src="./js.png" className="floating-logo logo3" />
                <img src="./css.png" className="floating-logo logo4" />
                <img src="./redux.png" className="floating-logo logo5" />
                <img src="./bootstrap.png" className="floating-logo logo6" />
                <img src="./git.png" className="floating-logo logo7" />
            </div>
        </div>
    );
}

export default Home;

import './../CSSFILE/Project.css'
import { TiWeatherSunny } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";
import { PiQuestionMarkBold } from "react-icons/pi";
import Button from './Button';

function Projects() {
    const cards = [
        { id: 1, projectname: "ECOMMERCE", backText: [<TiWeatherSunny/>] , des:"Built with React JS, Redux Toolkit, and Bootstrap, enhancing functionality with advanced state management and a responsive UI" , url: '' },
        { id: 2, projectname: "WEATHER", backText: [<BsCart4/>] , des :"Developed a weather application using React JS, custom CSS, and a cartoon-style design to provide real-time weather information" , url: 'https://waether-msh.vercel.app/'},
        { id: 3, projectname: "QUIZ", backText: [<PiQuestionMarkBold/>] , des:"Created a static quiz website using React JS and custom CSS, offering an interactive and visually appealing quiz experience"  , url : 'https://quiz-msh.vercel.app/'},
    ];

    return (
       <section id='projects'>
         <div className="container">
        <h1 className=' aboutss text-center my-mb-4 py-5 my-3 textabout'>
            MY <span>PROJECT</span>
            </h1>
            <div className="row row-cols-1 mt-2 row-cols-md-3 g-4 px-3 px-sm-0">
                {cards.map(card => (
                    <div className=" aboutss p-3 col d-flex justify-content-center align-items-center" key={card.id}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className='w-100 h-75 m-4 d-flex flex-column justify-content-center'>
                                    <h1 className='iconsproject'>{card.backText[0]}</h1>
                                    <p className='h4'>{card.projectname}</p>
                                    </div>
                                  
                                </div>
                                <div className="flip-card-back">
                                <div className='w-100 h-75 m-4 d-flex flex-column justify-content-center align-items-center'>
                                    <p>{card.projectname}</p>
                                    <span className='text-center des mb-4'>{card.des}</span>
                                    { card.url !== '' ? (
                                        <a href={card.url}> <Button text={"VISIT"} /></a> )
                                        : ('')
                                    }
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </section>
    );
};

export default Projects
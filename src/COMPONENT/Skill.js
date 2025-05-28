import React from 'react'
import './../CSSFILE/Skill.css'

function Skill() {
  return (
 <section id='skills'>
    <div className="container px-5 mt-4">
            <h1 className=' aboutss text-center my-2 my-md-4 py-5 textabout'>
            My <span>SKILL</span>
            </h1>
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
            <div className='ms-3 xml aboutss'><b>HTML</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black  progress-bar-striped active" style={{ width: '95%' }} />
                    <div className="progress-value">95%</div>
                </div>
            </div>
            <div className='ms-3 xml aboutss'><b>CSS</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black  progress-bar-striped active" style={{ width: '90%' }} />
                    <div className="progress-value">90%</div>
                </div>
            </div>
            <div className='ms-3 xml aboutss'><b>BOOTSTRAP</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black  progress-bar-striped active" style={{ width: '80%' }} />
                    <div className="progress-value">80%</div>
                </div>
            </div>
            <div className='ms-3 xml aboutss'><b>MUI</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black  progress-bar-striped active" style={{ width: '50%' }} />
                    <div className="progress-value">50%</div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className='ms-3 xml aboutss'><b>JAWASCRIPT</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black progress-bar-striped active" style={{ width: '90%' }} />
                    <div className="progress-value">90%</div>
                </div>
            </div>
            <div className='ms-3 xml aboutss'><b>REACT JS</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black progress-bar-striped active" style={{ width: '90%' }} />
                    <div className="progress-value">90%</div>
                </div>
            </div>
            <div className='ms-3 xml aboutss'><b>REDUX TOOLKIT</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black progress-bar-striped active" style={{ width: '80%' }} />
                    <div className="progress-value">80%</div>
                </div>
            </div>
            <div className='ms-3 xml aboutss'><b>GIT HUB</b></div>
            <div className="progress-outer">
                <div className="progress">
                    <div className="progress-bar bg-black progress-bar-striped active" style={{ width: '80%' }} />
                    <div className="progress-value">80%</div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Skill

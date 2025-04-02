import React, { useState, useEffect } from 'react';
import { IoHomeOutline, IoFolderOutline, IoMoonOutline } from 'react-icons/io5';  
import { LuUser, LuContact } from 'react-icons/lu';  
import { MdOutlineLightMode } from 'react-icons/md'; 
import { IoMdMenu } from "react-icons/io";
import { scrollToSection } from './../utils/scrollToSection';  
import './../CSSFILE/Sidebar.css';

function Sidebaricon() {
    const [isOpen, setIsOpen] = useState(false);
    const savedMode = localStorage.getItem('msh') === 'true';
    const [data, setData] = useState(savedMode);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (data) {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }

        localStorage.setItem("msh", data);
    }, [data]);

    return (
        <div>
            <button className="btn d-flex d-md-none position-absolute top-0  btntoggle d-xl-none" type="button" onClick={toggleSidebar}>
                <IoMdMenu style={{ fontSize: "44px" }} />
            </button>
            <div className={`offcanvas bodycolour offcanvas-start w-75 ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasStartLabel"></h5>
                    <button type="button" className="btn-close" onClick={toggleSidebar} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <div className='users' onClick={() => { scrollToSection('Home'); setIsOpen(false); }}><h6><IoHomeOutline /></h6><b>HOME</b></div>
                        <div className='users' onClick={() => { scrollToSection('about'); setIsOpen(false); }}><h6><LuUser /></h6><b>ABOUT</b></div>
                        <div className='users' onClick={() => { scrollToSection('skills'); setIsOpen(false); }}><h6><LuUser /></h6><b>SKILL</b></div>
                        <div className='users' onClick={() => { scrollToSection('projects'); setIsOpen(false); }}><h6><IoFolderOutline /></h6><b>PROJECTS</b></div>
                        <div className='users' onClick={() => { scrollToSection('contact'); setIsOpen(false); }}><h6><LuContact /></h6><b>CONTACT</b></div>
                        <div className='users' onClick={() => { setData((prevMode) => !prevMode); setIsOpen(false) }}><h6>{data ? <IoMoonOutline /> : <MdOutlineLightMode />}</h6><b>{data ? "DARK MODE" : "LIGHT MODE"}</b></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebaricon;

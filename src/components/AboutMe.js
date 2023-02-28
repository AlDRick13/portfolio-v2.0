import React from 'react';
import Button from '@mui/material/Button';
import ResumePDF from '../files/Aldo_Resume.pdf';

const AboutMe = () => {


    return (
        <div id='aboutMe' className="mt-20 ">
            <div className="mb-5 text-center text-white w-full font-mono font-bold  m-1  text-5xl">
                About me
            </div>
            <div className=' p-5 rounded-md lg:w-3/5 bg-secondary md:w-7/10 items-center w-4/5 m-auto  flex flex-wrap'>

                <div className="mb-5 m-auto md:m-0 md:w-1/2">
                    <div className="profile-picture m-auto"></div>

                </div>
                <div className="m-auto md:m-0  text-green-two md:w-1/2">
                    <div className=" font-mono md:mt-10 text-4xl md:text-5xl">
                        <h1>Hi, my name is Aldo...</h1>
                    </div>
                    <div className="text-justify mb-5 mt-10 hidden sm:flex">I am a Full Stack developer from Mexico with a passion for programming and staying up to date with the latest technologies. My skills include proficiency in languages such as JavaScript, HTML, CSS and experience working with frameworks like React and Node.js. I have a track record of delivering successful solutions and enjoy taking on challenging projects that allow me to continue learning and growing as a developer. My portfolio showcases some of my best projects, including live demos and code repositories. Feel free to take a look and contact me for more information or to discuss potential future projects.</div>
                    <div className="text-justify mb-5 mt-10 sm:hidden">
                        I'm a passionate Full Stack developer from Mexico with skills in JavaScript, HTML, CSS, React, Node.js. My successful projects showcase my abilities, and I enjoy taking on challenging projects to keep learning. View my portfolio for more information and contact me for potential projects.                        </div>

                    <div className="flex justify-center">
                        <a href={ResumePDF} download="ResumePDF" target='_blank' rel="noreferrer">
                            <Button variant="contained">Download Resume!</Button>
                        </a>
                    </div>
                </div>
            </div></div>

    );
};

export default AboutMe;
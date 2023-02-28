import React from 'react';
import Carousel from 'react-material-ui-carousel';

import react from '../images/react.svg';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';

import node from '../images/node.svg';
import tailwind from '../images/tailwind.svg';
import mui from '../images/mui.svg';
import github from '../images/github.svg';
import antd from '../images/antd.png';
import postgresql from '../images/postgresql.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

var technologies = [
    { name: "HTML", icon: <img src={html} alt="html logo" style={{ height: 240 }} /> },
    { name: "CSS", icon: <img src={css} alt="css logo" style={{ height: 240 }} /> },
    { name: "JS", icon: <img src={js} alt="js logo" style={{ height: 240 }} /> },
    { name: "ReactJS", icon: <img src={react} alt="react logo" style={{ height: 240 }} /> },
    { name: "NodeJS", icon: <img src={node} alt="node logo" style={{ height: 240 }} /> },
    { name: "Tailwind", icon: <img src={tailwind} alt="tailwind logo" style={{ height: 240 }} /> },
    { name: "MaterialUI", icon: <img src={mui} alt="mui logo" style={{ height: 240 }} /> },
    { name: "GitHub", icon: <img src={github} alt="github logo" style={{ height: 240 }} /> },
    { name: "AntDesign", icon: <img src={antd} alt="antd logo" style={{ height: 240 }} /> },
    { name: "PostgreSQL", icon: <img src={postgresql} alt="postgresql logo" style={{ height: 240 }} /> },
];
const Gallery = () => {
    return (
        <div className="mt-20 ">
            <div className=" mb-5 text-center text-white w-full font-mono font-bold  m-1  text-5xl">
                My skills
            </div>
            <div className='p-5 rounded-md lg:w-3/5 bg-secondary md:w-7/10 items-center w-4/5 m-auto  flex flex-wrap'>

                <Carousel

                    PrevIcon={<ArrowBackIosIcon />}
                    NextIcon={<ArrowForwardIosIcon />}
                    className='mt-5 w-full'
                >
                    {technologies.map(technology => (

                        <div className=' '>
                            <div className=" flex justify-center text-green-two font-mono  text-4xl md:text-5xl">
                                <h1>{technology.name}</h1>
                            </div>
                            <div className=" mb-7 pb-5 flex justify-center">
                                {technology.icon}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Gallery;
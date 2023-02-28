import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
var projects = [
    {
        name: "Country Searcher",
        image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6156877227256800075e65b0/screenshot_2021-10-01-03-59-12-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/countries-app",
        demo: "https://happy-ramanujan-70d8aa.netlify.app/",
        description: "Crated with ReactJs, Hooks and TailWind"
    },
    {
        name: "Cars Crud",
        image: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/60808751b26d2b107e0f7c2f/screenshot_2021-04-21-20-13-11-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/my-cars-crud",
        demo: "https://my-cars-crud.netlify.app/",
        description: "Crated with HTML, CSS and JS, "
    },
    {
        name: "Famous Quotes",
        image: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/60ecba820640681bcff0562f/screenshot_2021-07-12-21-57-18-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/quotes",
        demo: "https://hardcore-hermann-bd5d0f.netlify.app/",
        description: "Crated with ReactJs and TailWind"
    },
    {
        name: "Concept Music Store",
        image: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/61a870ed095b32a4ba05b98c/screenshot_2021-12-02-07-10-10-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/ecommerce",
        demo: "https://reverent-borg-27e3e3.netlify.app/",
        description: "Crated with ReactJs, Hooks and TailWind"
    },
    {
        name: "Weather App",
        image: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6197f877b1799c00072def60/screenshot_2021-11-19-19-18-50-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/city-weather",
        demo: "https://cityweather-aldric.netlify.app/",
        description: "Crated with ReactJs, Hooks and TailWind"
    },
    {
        name: "Basic Galley",
        image: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6139155e777ab60fa1a24d04/screenshot_2021-09-08-19-57-18-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/gallery",
        demo: "https://romantic-kare-1b48ab.netlify.app/",
        description: "Crated with HTML and CSS, using API"
    },
    {
        name: "Search Github Users",
        image: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/619b2898046bba00079049d8/screenshot_2021-11-22-05-21-10-0000.png",
        alt: "Webpage",
        repo: "https://github.com/AlDRick13/github-api",
        demo: "https://github-api-aldo.netlify.app/",
        description: "Crated with ReactJs, Hooks and Tailwind"
    },

];

const Projects = () => {
    return (
        <div id='projects' className="mt-20 ">
            <div className="mb-5 text-center text-white w-full font-mono font-bold  m-1  text-5xl">
                My Projects
            </div>
            <div className=' text-green-two p-5 sm:p-10 rounded-md lg:w-3/5 bg-secondary md:w-7/10 items-center w-4/5 m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 '>
                {
                    projects.map(project => (
                        <Card className=' m-auto hover:scale-110 ease-in duration-1000' sx={{ color: 'white', backgroundColor: "black", maxWidth: 350 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.alt}
                                />
                                <CardContent>
                                    <Typography className="text-center" gutterBottom variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    <Typography className="text-center pb-1" variant="body2" >
                                        {project.description}
                                    </Typography>
                                    <div className="w-full flex">
                                        <a href={project.repo} target="_blank" rel="noreferrer" className="w-1/2 text-center hover:scale-150 ease-in duration-100"><GitHubIcon></GitHubIcon></a>
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="w-1/2 text-center hover:scale-150 ease-in duration-100"><WebIcon></WebIcon></a>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }




            </div></div>

    );
};

export default Projects;
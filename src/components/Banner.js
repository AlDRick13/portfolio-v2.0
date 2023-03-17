import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div >
            <div className="flex banner ">
                <div className="m-auto text-white">
                    <div className="m-1 font-mono text-4xl font-bold text-center tracking-primary md:m-3 lg-m5 md:text-6xl lg:text-8xl">
                        I am Aldo Reygadas
                    </div>
                    <hr className='bg-white' />
                    <div className="m-1 font-mono text-2xl font-bold text-center tracking-primary md:text-5xl lg:text-7xl">
                        <TypeAnimation
                            sequence={[
                                'Full-stack Developer', // Types 'One'
                                3000, // Waits 1s
                                'Tech Enthusiast', // Deletes 'One' and types 'Two'
                                3000, // Waits 2s
                                'Coder',
                                3000,
                                () => {
                                    console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em' }}
                        />

                    </div>
                </div>

            </div>
            {/* <div className="flex banner sm:hidden">
                <div className="m-auto text-white">
                    <Typography

                        variant="h4"
                        noWrap
                        component="a"
                        sx={{
                            color: "white",
                            justifyContent: 'center',
                            display: 'flex',
                            // display: { md: 'none' },
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        Aldo Reygadas
                    </Typography>
                    <hr className='bg-white' />
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        sx={{
                            justifyContent: 'center',
                            display: 'flex',
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: "white",
                            textDecoration: 'none',
                        }}
                    >
                        Fullstack Developer
                    </Typography>
                </div>

            </div> */}
        </div>
    );
};

export default Banner;
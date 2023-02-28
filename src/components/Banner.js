import React from 'react';

const Banner = () => {
    return (
        <div >
            <div className="banner flex ">
                <div className="m-auto   text-white">
                    <div className="text-center tracking-primary font-mono font-bold text-4xl m-1 md:m-3 lg-m5 md:text-6xl lg:text-8xl">
                        Aldo Reygadas
                    </div>
                    <hr className='bg-white' />
                    <div className="text-center tracking-primary font-mono font-bold text-2xl m-1 md:text-5xl lg:text-7xl">
                        Full-stack Developer
                    </div>
                </div>

            </div>
            {/* <div className="banner flex sm:hidden">
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
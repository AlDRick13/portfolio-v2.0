
import { Grid, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Contact = () => {

    return (
        <div id='contact' className="mt-20 ">
            <div className=" mb-5 text-center text-white w-full font-mono font-bold  m-1  text-5xl">
                Contact me
            </div>


            <div className='p-5 content-center rounded-md lg:w-3/5 bg-secondary text-white md:w-7/10 items-center w-4/5 m-auto  flex flex-wrap  '>

                <form className="sm:w-1/2 w-full">
                    <Grid xs={12} alignItems="center" sx={{

                        input: { color: 'white' }, "& .MuiInputBase-root": {
                            color: 'white'
                        }, "& .MuiFormLabel-root": {
                            color: 'white'
                        },
                        "& .MuiFormLabel-root.Mui-focused": {
                            color: 'white'
                        }
                    }} container spacing={1}>
                        <Grid xs={12} item>
                            <TextField className="text-white" placeholder="Enter Name" label=" Name" variant="standard" fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField type="email" placeholder="Enter email" label="Email" variant="standard" fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField placeholder="Enter subject" label="Subject" variant="standard" fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="standard" fullWidth required />
                        </Grid>
                        <div className="m-auto pt-4">
                            <Grid item alignItems="center" xs={1}>
                                <Button className="m-auto" type="submit" variant="contained" color="primary" fullWidth>Send</Button>
                            </Grid>
                        </div>

                    </Grid>


                </form>
                <div className="sm:w-1/2 text-center mt-5 p-10 sm:p-5 md:p-10 sm:mt-0 w-full">
                    <div className="mb-5 place-content-center">
                        <a href='mailto:reygadas.ar@gmail.com' target="_blank" rel="noreferrer">
                            <EmailIcon fontSize="large" />
                            <span>reygadas.ar@gmail.com</span>
                        </a>
                    </div>

                    <div className="mb-5 place-content-center ">
                        <a href="https://wa.link/45pig4" target="_blank" rel="noreferrer">
                            <WhatsAppIcon fontSize="large" />
                            <span>+52 2411124190</span>
                        </a>


                    </div>
                    <div className="mb-5 place-content-center ">
                        <LocationOnIcon fontSize="large" />
                        <span>Puebla de Zaragoza, Puebla</span>

                    </div>
                    <div className='flex justify-evenly'>
                        <a href='https://www.linkedin.com/in/aldrick13/' target="_blank" rel="noreferrer">
                            <LinkedInIcon sx={{ fontSize: 50 }} color="primary" />

                        </a>

                        <a href='https://github.com/AlDRick13/' target="_blank" rel="noreferrer">
                            <GitHubIcon sx={{ fontSize: 50 }} />

                        </a>

                    </div>
                </div>


            </div>
        </div >
    );
};


export default Contact;
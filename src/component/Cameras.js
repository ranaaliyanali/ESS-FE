import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import {Button,Tooltip} from "@mui/material";
import {Link} from 'react-router-dom';

const scrollToTop = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

export default function Camera(){

   return(
            <div className="card rounded my-3 shadow-lg back-card" style={{width:"230px",margin:'10px',height:"fit-content",maxHeight: '460px'}}>
                <Typography variant="subtitle2" gutterBottom component="div" marginTop={1} marginLeft={2} style={{display: 'inline-flex',
                    marginLeft: '10px',
                    justifyContent: 'center',alignItems:'flex-start'}}>

                    <div >
                        <FiberManualRecordIcon color={"green"} sx={{position: 'absolute', top:10, right:10, bottom:0 }} />
                    </div>
                    <span>description</span>
                    </Typography>
                <Typography  style={{borderTop:'groove',borderBottom:'groove',display:'flex',justifyContent:'center',marginBottom:'5px'}}><span  style={{fontSize:'12px'}}>date</span>   </Typography>
               <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src={"../images/11images.jpeg"}
                    alt=""
                    className="card-img-top time"
                    style={{
                      width: '150px',
                      height: '150px',
                      borderRadius: '15px'
                    }}
                    onError={(e) => {
                      e.target.src = '/video.png'; // Replace with the path to your black image
                    }}
                  />
               </div>


                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-around',margin:'5px'}}>
                <Tooltip title="Location" placement="top">
                <Button size="small"  component="span" style={{ border: '1px solid',color:'black',opacity:'0.8' ,fontSize:'12px'}}
                 onClick={() => {
                  scrollToTop();
                }}>
                <LocationOnIcon/>Location
                </Button>
                </Tooltip>
                 <Button size="small"  component={Link} to={`/statistics/$`} style={{border:'1px solid',color:'black',opacity:'0.8' ,fontSize:'12px'}}>
               <LeaderboardIcon/>  Statistics
                 </Button>
                 </div>
        </div>
    );
}
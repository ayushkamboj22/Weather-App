import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({ info }) {

    const INIT_URL="https://s.w-x.co/ap_21074085936124.jpg";

    
    return(
        <div className="InfoBox">

            
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
             <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={INIT_URL}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   <div>Temperature : {info.temp}&deg;C</div>
                   <div>Humidity : {info.humidity}</div>
                   <div>Weather : {info.weather}</div>
                   <div>Feels Like : {info.feelslike}&deg;C</div>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    );

}
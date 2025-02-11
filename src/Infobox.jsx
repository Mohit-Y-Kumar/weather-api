import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Infobox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1505569399497-2fc102b0887c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhemUlMjBkdXN0eXxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL="https://plus.unsplash.com/premium_photo-1680815065140-0adb64cadeb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FybSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    return (
        <div className="Infobox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity >80 ?
                         RAIN_URL 
                         :info.temp >15 ?
                          HOT_URL : COLD_URL}

                    title="green iguana"
                />

                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
    {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
</Typography>

                    <Typography variant="body2" color='text.secondary' component={"span"}>
                        <p>Temprature ={info.temp}&deg;c</p>
                        <p>Humidity ={info.humidity}</p>
                        <p>Min Temp ={info.tempMin}</p>
                        <p>Max Temp ={info.tempMax}</p>
                        <p>The weather can be discribed as ${info.weather} and feels like{info.feelslike}</p>
                    </Typography>
                </CardContent>

            </Card>
        </div>

    )
}
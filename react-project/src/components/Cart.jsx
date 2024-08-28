import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import "../assets/css/style.scss";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Cart({products}) {
    const {id,price,description,image,title}=products;
    const navigate = useNavigate()
  return (
    <Card sx={{ width: 280,minHeight:400 }}>
      <CardMedia
       
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
       <div  className="productImg">
              <img src={image} />
            </div>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <FaCartShopping style={{fontSize:"26px",cursor:'pointer'}}/>
        <GoHeartFill style={{fontSize:"26px",color:"red",cursor:'pointer'}} />
        <Button variant="contained" onClick={()=>navigate(`/detail/${id}`)}>Detail</Button>

      </CardActions>
      
    </Card>
  );
}

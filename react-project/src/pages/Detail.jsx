import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../assets/css/style.scss";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToBasket, calculateAmount } from "../redux/slices/basketSlice";
const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await axios(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct(response.data);
  };


  useEffect(() => {
    getData();
  }, []);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return count;
    }
  };

  const addBasket = () => {
    const payload = {
      id: product.id,
      price: product.price,
      image: product.image,
      title: product.title,
      description: product.description,
      count,
    };
    if (count > 0) {
      dispatch(addToBasket(payload));
      dispatch(calculateAmount())

    }else{
      alert("Xais olunur mehsul elave edin")
    }
  };
 

  return (
    <Card
      sx={{ width: 580, minHeight: 400 }}
      style={{
        margin: "auto",
        marginTop: "60px",
        padding: "20px",
        border: "2px solid blue",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="productImg">
        <img src={product.image} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}$
        </Typography>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              Decrement();
            }}
          >
            -
          </Button>
          <span>{count}</span>
          <Button
            variant="outlined"
            onClick={() => {
              Increment();
            }}
          >
            +
          </Button>
        </CardActions>
        <Button
          style={{ marginTop: "15px" }}
          variant="contained"
          onClick={() => [addBasket()]}
        >
          Add to basket
        </Button>
      </CardContent>
    </Card>
  );
};

export default Detail;

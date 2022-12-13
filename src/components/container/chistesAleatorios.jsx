import React, { useState, useEffect } from "react";
import getRandomChist from "../../services/axios.service";
import Button from "@mui/material/Button";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const ChistesAleatorios = () => {
  useEffect(() => {
    obtainJoke();
  }, []);

  const [joke, setJoke] = useState([]);
  const [liked, setLiked] = useState({
    like: 0,
    dislike: 0,
  });

  const obtainJoke = () => {
    getRandomChist()
      .then((response) => {
        if (response.status === 200) {
          setJoke(response.data.value);
        }
        console.log(response);
      })
      .catch((error) => {
        alert(`Get wrong ${error}`);
      });
  };

  return (
    <div>
      <h1>Hello! this joke OMG</h1>
      <blockquote>
        <p>{joke}</p>
      </blockquote>
      <Button variant="contained" onClick={obtainJoke}>
        New joke
      </Button>
      <ThumbUpAltIcon
        style={{ marginLeft: 250, cursor: "pointer" }}
        fontSize="large"
        onClick={() =>
          setLiked({
            ...liked,
            like: liked.like + 1,
          })
        }
      ></ThumbUpAltIcon>
      <ThumbDownAltIcon
        style={{ marginLeft: 5, cursor: "pointer" }}
        fontSize="large"
        onClick={() =>
          setLiked({
            ...liked,
            dislike: liked.dislike + 1,
          })
        }
      ></ThumbDownAltIcon>
      <div>Likes: {liked.like}</div>
      <div>Dislikes: {liked.dislike}</div>
    </div>
  );
};

export default ChistesAleatorios;

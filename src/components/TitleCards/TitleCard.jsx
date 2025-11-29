import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiDate] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDk1NzliNGFkNGY1YzdkN2NiMDNhOWU5NjYzYzJjNyIsIm5iZiI6MTc0NTIzOTEyOS43ODcwMDAyLCJzdWIiOiI2ODA2M2M1OTNmODg4NTRjNDllZTYyMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lN9M7APo4kPuNMq9oRK8T1GD4cJnNgK-4Jq5F31hoFg",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);

    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiDate(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="titleCard">
      <h2>{title} </h2>
      <div className="cardList" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;

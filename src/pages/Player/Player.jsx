import React, { useContext, useEffect, useState } from "react";
import "./Player.css";
import backArrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";

const Player = () => {
  const [apiDate, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const { setLoading } = useContext(LoadingContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDk1NzliNGFkNGY1YzdkN2NiMDNhOWU5NjYzYzJjNyIsIm5iZiI6MTc0NTIzOTEyOS43ODcwMDAyLCJzdWIiOiI2ODA2M2M1OTNmODg4NTRjNDllZTYyMGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lN9M7APo4kPuNMq9oRK8T1GD4cJnNgK-4Jq5F31hoFg",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={backArrow}
        onClick={() => {
          setLoading(true);
          navigate(-1);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiDate.key}`}
        frameborder="0"
        title="trailer"
        allowFullScreen
        width="90%"
        height="90%"
      ></iframe>
      <div className="playerInfo">
        <p>{apiDate.published_at.slice(0, 10)}</p>
        <p>{apiDate.name}</p>
        <p>{apiDate.type}</p>
      </div>
    </div>
  );
};

export default Player;

import React, { useContext } from "react";
import "./Loading.css";
import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";
import { LoadingContext } from "../../context/LoadingContext";

const Loading = () => {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="loadingContainer">
      <div className="loading">
        <TailChase size="40" speed="1.75" color="white" />
      </div>
    </div>
  );
};

export default Loading;



import Fetchadvise from "../helper/Fetchadvise";
import "./advise.scss";
import { useState } from "react";

const Advise = () => {
  const [title, setTitle] = useState("");

  const handleTitleFetched = (fetchedTitle) => {
    setTitle(fetchedTitle);
  };
  return (
    <div className="advise-container">
      <h1> {title ? "title#" + title : "loading title..."}</h1>
      <Fetchadvise
        onTitleFetched={handleTitleFetched}
        className="advice-content"
      />
    </div>
  );
};

export default Advise;

import { useEffect, useState } from "react";

const Fetchadvise = ({ onTitleFetched }) => {
  const [advise, setAdvise] = useState("");
  const [title, setTitle] = useState("");
  const [button, setButton] = useState(false);
  const fetchAdvice = () => {
    setButton(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvise(data.slip.advice);
        setTitle(data.slip.id);
        onTitleFetched(data.slip.id);
        setButton(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, [onTitleFetched]);

  return (
    <div className="advice-sontent">
      {advise ? advise : "loading advice..."}
      <hr></hr>
      <button
        className=""
        onClick={() => {
          fetchAdvice();
        }}
      >
        {button ? "loading advice..." : "change advice"}
      </button>
    </div>
  );
};
export default Fetchadvise;

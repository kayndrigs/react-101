import { useEffect, useState } from "react";

export default function ShowHideText() {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };


  return (
    <div>
      {/* ternary operator */}
      <button onClick={handleClick}>
        {isShow ? "Click to Hide Text" : "Click to Show Text"}
      </button>
      {isShow ? <HideText/> : <ShowText/> }
    </div>
    );  
}


function HideText() {
  /** Pag gumana yung useEffect hook, meaning nasa mounted state */
  useEffect(() => {
    console.log("Hide Text is Mounted");
    
  /** Unmounting */
    return () => {
        console.log("Hide Text is Unmounted")
    };
    
  }, []);
  return <p>Hide Text</p>
};


function ShowText() {
  useEffect(() => {
    console.log("Show Text is Mounted");
      /** Unmounting */
    return () => {
      console.log("Show Text is Unmounted")
    };
  }, []);

  return <p>Show Text</p>
}
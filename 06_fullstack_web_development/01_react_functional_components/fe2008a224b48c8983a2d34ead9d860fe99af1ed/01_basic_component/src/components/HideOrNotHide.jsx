import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [buttonText, changeButtonText] = React.useState("Hidde Text");
  const [showText, setShowText] = React.useState(true);
  const onClick = () => {
    setShowText(false);
    changeButtonText("Show");
  };
  return (
    <div>
      <button onClick={onClick}> {buttonText}</button>
      {showText ? <p> My paragraph </p> : null}
    </div>
  );
};

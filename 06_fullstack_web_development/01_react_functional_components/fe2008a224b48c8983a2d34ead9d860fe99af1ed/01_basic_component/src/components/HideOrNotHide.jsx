import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const hide = "Hide";
  const show = "Show";
  const [buttonText, setButtonText] = React.useState(show);
  const [showParagraph, setShowParagraph] = React.useState(true);
  const onClick = () => {
    setShowParagraph(!showParagraph);
    setButtonText(buttonText === show ? hide : show);
  };
  return (
    <div>
      <button onClick={onClick}> {buttonText}</button>
      {showParagraph ? <p> My paragraph </p> : null}
    </div>
  );
};

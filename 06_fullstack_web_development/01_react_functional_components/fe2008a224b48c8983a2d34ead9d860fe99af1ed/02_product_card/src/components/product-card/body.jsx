import React from "react";

const CardBody = (props) => {
  const showScreens = "Show Screenshots";
  const hideScreens = "Hide Screenshots";
  const [buttonText, changeButtonText] = React.useState(showScreens);
  const [showScreenshots, setShowScreenshots] = React.useState(false);
  const onClick = () => {
    setShowScreenshots(!showScreenshots);
    changeButtonText(buttonText === showScreens ? hideScreens : showScreens);
  };

  return (
    <div>
      <div>
        <img src={props.cover} alt="logo" />
      </div>
      <div>
        <p>{props.firstReleaseDate}</p>
        <p>{props.genres}</p>
        <p>{props.summary}</p>
      </div>

      <button onClick={onClick}>{buttonText}</button>
      {showScreenshots ? (
        <div>
          {props.screenshots.map((element, index) => {
            return <img src={element} key={index} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CardBody;

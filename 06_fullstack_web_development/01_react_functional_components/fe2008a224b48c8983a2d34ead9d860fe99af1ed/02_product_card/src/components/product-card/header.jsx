import React from "react";

const CardHeader = (props) => {
  console.log("platformLogos", props.platformLogos);
  return (
    <div>
      <p>{props.name}</p>
      <div>
        {props.platformLogos.map((logoUrl, index) => {
          return <img key={`${index}-${logoUrl}`} src={logoUrl} />;
        })}
      </div>
    </div>
  );
};

export default CardHeader;

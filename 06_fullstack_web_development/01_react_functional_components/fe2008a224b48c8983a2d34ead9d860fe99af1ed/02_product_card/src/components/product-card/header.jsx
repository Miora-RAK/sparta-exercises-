import React from "react";

const CardHeader = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      {props.platformLogos.platforms.map((platform) => {
        if (platform.platform_logo.url === null) {
          return <img src={platform.platform_logo.url} key={platform.platform_logo.url} />;
        } else {
          return <img src="//images.igdb.com/igdb/image/upload/t_logo_med/pl6b.png" />;
        }
      })}
    </div>
  );
};

export default CardHeader;

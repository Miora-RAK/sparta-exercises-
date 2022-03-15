import React from "react";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader name={props.product.name} platformLogos={props.product} />
      <CardBody
        cover={props.product.cover.url}
        firstReleaseDate={props.product.first_release_date}
        genres={props.product.genres.map((element) => element.name)}
        summary={props.product.summary}
        screenshots={props.product}
      />
      <CardFooter slug={props.product} />
    </div>
  );
};

export default ProductCard;

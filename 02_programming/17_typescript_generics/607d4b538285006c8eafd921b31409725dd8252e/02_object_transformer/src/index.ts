type Product = {
  productName: string;
  quantity: number;
};

function productTransformer(product: Product): [string, string | number][] {
  return Object.entries(product);
}

// ou
// function productTransformer(product: Product): [string, string | number][] {
//  const productTransformArray = [];
// const productNameArray = [];
// const quantityArray = [];
// productNameArray.push(Object.keys(product)[0], product.productName);
// quantityArray.push(Object.keys(product)[1], product.quantity);
// productTransformArray.push(productNameArray, quantityArray);
// return productTransformArray;
// }

// Leave the line below for tests to work properly.
export { productTransformer };

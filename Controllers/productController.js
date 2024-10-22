const products = [
  { id: 1, name: "iphone12", price: 25000 },
  { id: 2, name: "laptop", price: 55000 },
  { id: 3, name: "headphone", price: 5000 },
  { id: 4, name: "printer", price: 15000 },
];

//get method

export const getProducts = (req, res) => {
  res
    .status(200)
    .json({ message: "Products Retrieved Successfully", data: products });
};

// get method by id

export const getProductById = (req, res) => {
  const productId = req.params.id;
  //console.log("productId",productId);

  const productDetail = products.find((ele) => ele.id == productId);
  if (!productDetail) {
    return res.status(404).json({ message: "Product Not Found" });
  }

  res
    .status(200)
    .json({ message: "Product Retrieved Successfully", data: productDetail });
};

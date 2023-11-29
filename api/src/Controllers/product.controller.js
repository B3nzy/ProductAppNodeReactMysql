const connection = require("../DatabaseConnection/MysqlConnect");

const getProducts = (req, res) => {
  const query = `SELECT * FROM Product`;
  connection.query(query, (err, data, field) => {
    if (err) console.log(err.message);
    res.status(200).json({ message: "success", productData: data });
  });
};

const createProducts = (req, res) => {
  const { name, description, seller_name, price } = req.body.formData;

  const query = `INSERT INTO PRODUCT(name, description, seller_name, price) VALUES("${name}", "${description}", "${seller_name}", ${price})`;

  connection.query(query, (err, data, field) => {
    if (err) console.log(err.message);
    res.status(200).json({ message: "success" });
  });
};

const deletProduct = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM PRODUCT WHERE id=${id}`;
  connection.query(query, (err, data, field) => {
    if (err) console.log(err.message);
    res.status(200).json({ message: "success" });
  });
};

const getProduct = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM Product WHERE id=${id}`;
  connection.query(query, (err, data, field) => {
    if (err) console.log(err.message);
    res.status(200).json({ message: "success", productData: data });
  });
};

const updateProducts = (req, res) => {
  const { id, name, description, seller_name, price } = req.body.formData;

  console.log(id, name, description, seller_name, price);

  const query = `UPDATE PRODUCT SET name="${name}", description="${description}", seller_name="${seller_name}", price=${price} where id=${id}`;

  connection.query(query, (err, data, field) => {
    if (err) console.log(err.message);
    res.status(200).json({ message: "success" });
  });
};

module.exports = {
  getProducts,
  createProducts,
  deletProduct,
  getProduct,
  updateProducts,
};

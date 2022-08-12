import * as Styles from "./DeliveryReport.styles.ts";
import axios from "axios";
import React, { useState } from "react";

const DeliveryReport = (): JSX.Element => {
  const [stockData, setStockData] = useState([]);

  const handleOnClick = () => {
    getData();
    console.log(stockData);
  };

  const getData = () => {
    axios
      .get("http://localhost:4040/stock")
      .then(function (response) {
        const { data } = response.data;
        setStockData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postData = () => {
    axios
      .post("http://localhost:4040/delivery", {
        category: "new category",
        product: "new product",
        stock: 10,
        desired: 15,
        updated: "2022-05-13T09:36:00.000Z",
        isOnMenu: "False",
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteProduct = () => {
    axios({
      method: "delete",
      url: "http://localhost:4040/entry",
      data: { product: "recgxbhW3QtLegVNY" },
    }).catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div>
      <Styles.HeaderContainer>
        <h1>Pier Cafe Inventory</h1>
      </Styles.HeaderContainer>
      <br />
      <Styles.FormContainer>
        <h2>Report a delivery</h2>
        <select name="Item" />
        <input type="text" placeholder="input quantity..." />
        <button>Save</button>
      </Styles.FormContainer>
      <Styles.ButtonsContainer>
        <button>Add a category</button>
        <button onClick={postData}>Add a product</button>
        <button>Edit</button>
        <button onClick={deleteProduct}>Delete something</button>
        <button onClick={handleOnClick}>Get data</button>
      </Styles.ButtonsContainer>
      <div>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Product</th>
              <th>Quantity in stock</th>
              <th>Desired quantity</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((record, i) => (
              <tr key={`product-${i}`}>
                <td>{record.fields.category}</td>
                <td>{record.fields.product}</td>
                <td>{record.fields.stock}</td>
                <td>{record.fields.desired}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {stockData.map((record, i) => (
          <p key={i}>{record.fields.category}</p>
        ))} */}
      </div>
    </div>
  );
};

export default DeliveryReport;

import * as Styles from "./DeliveryReport.styles.ts";
import axios from "axios";
import React, { useState } from "react";

const DeliveryReport = (): JSX.Element => {
  const [stockData, setStockData] = useState([]);

  const handleOnClick = () => {
    getData();
    console.log(stockData[0].fields.category);
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
        <button>Add a product</button>
        <button>Edit</button>
        <button onClick={handleOnClick}>Get data</button>
      </Styles.ButtonsContainer>
      <div>
        {stockData.map((record, i) => (
          <p key={i}>{record.fields.category}</p>
        ))}
      </div>
    </div>
  );
};

export default DeliveryReport;

import * as Styles from "./DeliveryReport.styles.ts";
import axios from "axios";
import React, { useEffect } from "react";

import TopBar from "/Users/kasiadziewicka/coding-personal/inventory-app/src/components/TopBar/TopBar.tsx";

const DeliveryReport = (): JSX.Element => {
  useEffect(() => {
    axios
      .get("https://api.airtable.com/stock")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TopBar />
      <Styles.Content>
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
        </Styles.ButtonsContainer>
      </Styles.Content>
    </div>
  );
};

export default DeliveryReport;

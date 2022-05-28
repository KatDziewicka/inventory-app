import * as Styles from "./TopBar.styles.ts";
import { Link } from "react-router-dom";

export default function TopBar(): JSX.Element {
  return (
    <div>
      <Styles.HeaderContainer>
        <h1>Pier Cafe Inventory</h1>
      </Styles.HeaderContainer>
      <br />
      <Styles.Tabs>
        <Link to="/delivery-report">
          <p>Delivery</p>
        </Link>
        <Link to="/sold-items">
          <p>Sold items</p>
        </Link>
        <Link to="/stock-check">
          <p>Stock check</p>
        </Link>
        <Link to="/history">
          <p>History</p>
        </Link>
      </Styles.Tabs>
    </div>
  );
}

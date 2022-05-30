
import DeliveryReport from './pages/DeliveryReport/DeliveryReport.tsx';
import ItemsSold from './pages/ItemsSold/ItemsSold.tsx';
import StockCheck from './pages/StockCheck/StockCheck.tsx';
import History from './pages/History/History.tsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<DeliveryReport />}
        />
        <Route
          path="/sold-items"
          element={<ItemsSold/>}
        />
        <Route
          path="/stock-check"
          element={<StockCheck />}
        />
        <Route
          path="/history"
          element={<History />}
        />
      </Routes>
    </Router>
  </div>
);
}

export default App;

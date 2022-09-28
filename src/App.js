import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss';

import Dashboard from "./features/dashboard/Dashboard";
import Balances from "./features/balances/Balances";
import Transactions from "./features/transactions/Transactions";
import Analytics from "./features/analytics/Analytics";
import Marketing from "./features/marketing/Marketing";
import ExchangeRates from "./features/exchangerates/ExchangeRates";
import Checkout from "./features/checkout/Checkout";
import PaymentLinks from "./features/paymentlinks/PaymentLinks";
import Wire from "./features/wire/Wire";

function App() {
  return (

        <div className="App">
         <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index  element={<Dashboard />} />
                  <Route path="balances"  element={<Balances />} />
                  <Route path="transactions"  element={<Transactions />} />
                  <Route path="analytics"  element={<Analytics />} />
                  <Route path="marketing"  element={<Marketing />} />
                  <Route path="exchange-rates"  element={<ExchangeRates />} />
                  <Route path="checkout"  element={<Checkout />} />
                  <Route path="payment-links"  element={<PaymentLinks />} />
                  <Route path="wire"  element={<Wire />} />
              </Route>
            </Routes>
         </BrowserRouter>
        </div>
  );
}

export default App;

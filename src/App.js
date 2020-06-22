import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Transactionlist } from "./components/Transactionlist";
import { Addtransaction } from "./components/Addtransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactionlist />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

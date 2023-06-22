import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.css";

function App() {
  /* ---------------------------------- LOGIN --------------------------------- */
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin(true);
  }

  function handleLogout() {
    setLogin(false);
  }

  /* ---------------------------- FORM ---------------------------- */
  const state = {
    id: "",
    description: "",
    amount: "",
    type: "Entrada",
  };

  const [transaction, setTransaction] = useState(state);

  /* ----------------------------- LIST OF ENTRIES ---------------------------- */
  const [valuesList, setValuesList] = useState([]);

  function addEntry(transaction) {
    if (transaction.description !== "" && transaction.amount > 0) {
      const newValue = { ...transaction, id: uuidv4() };
      setTransaction(newValue);
      setValuesList([...valuesList, newValue]);
      setTransaction(state); // Clearing inputs
    }
  }

  /* ------------------------------- SUM ENTRIES ------------------------------ */

  const allIncome = valuesList.filter((value) => value.type === "Entrada");
  const allExpeses = valuesList.filter((value) => value.type === "Saída");

  const sumIncome = allIncome.reduce((acc, cur) => acc + cur.amount, 0);
  const sumExpenses = allExpeses.reduce((acc, cur) => acc + cur.amount, 0);

  const total = sumIncome - sumExpenses;

  /* --------------------------------- RETURN JSX --------------------------------- */

  return (
    <>
      {login ? (
        <HomePage
          handleLogout={handleLogout}
          transaction={transaction}
          setTransaction={setTransaction}
          valuesList={valuesList}
          setValuesList={setValuesList}
          addEntry={addEntry}
          state={state}
          total={total}
        />
      ) : (
        <LandingPage handleLogin={handleLogin} />
      )}
    </>
  );
}
export { App };

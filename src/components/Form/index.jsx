import React from "react";
import styles from "./index.module.css";

function Form({ transaction, setTransaction, addEntry, state }) {
  function submit(event) {
    event.preventDefault();
  }

  return (
    <form
      className={styles.form__container}
      onSubmit={(event) => {
        submit(event);
        addEntry(transaction);
      }}
    >
      <label className="font-size-2" htmlFor="value__description">
        Descrição
      </label>
      <input
        className={styles.form__input}
        onChange={(event) => {
          setTransaction({
            ...transaction,
            description: event.target.value,
          });
        }}
        name="description"
        id="value__description"
        type="text"
        placeholder="Descrição do valor"
        value={transaction.description}
      />
      <p className="font-size-2 font-color-gray">Ex: compra de roupa</p>

      <div className={styles.form__typeValueContainer}>
        <div className={styles.form__value}>
          <label className="font-size-2" htmlFor="input__value">
            Valor
          </label>
          <input
            className={styles.form__input}
            onChange={(event) => {
              setTransaction({
                ...transaction,
                amount: Number(event.target.value),
              });
            }}
            id="input__value"
            type="number"
            step="0.01"
            placeholder="Valor R$"
            value={transaction.amount}
          />
        </div>
        <div className={styles.form__type}>
          <label className="font-size-2" htmlFor="input__value">
            Tipo de Valor
          </label>
          <select
            className={styles.form__select}
            onChange={(event) => {
              setTransaction({
                ...transaction,
                type: event.target.value,
              });
            }}
            name="value__type"
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>

      <button type="submit" className="button--general">
        Inserir Valor
      </button>
    </form>
  );
}

export { Form };

import styles from "./index.module.css";

function EntriesList({ valuesList, setValuesList }) {
  function removeEntry(id) {
    const values = valuesList.filter((value) => value.id !== id);
    setValuesList(values);
  }

  const entries = valuesList.map((entry) => {
    if (entry.type === "Saída") {
      return (
        <li key={entry.id} className={`${styles.card} ${styles.expense}`}>
          <div className={styles.card__description}>
            <h3>{entry.description}</h3>
            <p>{entry.type}</p>
          </div>
          <div className={styles.card__values}>
            <p>
              {entry.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button
              className={styles.button__remove}
              onClick={() => {
                removeEntry(entry.id);
              }}
            ></button>
          </div>
        </li>
      );
    } else {
      return (
        <li key={entry.id} className={`${styles.card} ${styles.income}`}>
          <div className={styles.card__description}>
            <h3>{entry.description}</h3>
            <p>{entry.type}</p>
          </div>
          <div className={styles.card__values}>
            <p>
              {entry.amount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button
              className={styles.button__remove}
              onClick={() => {
                removeEntry(entry.id);
              }}
            ></button>
          </div>
        </li>
      );
    }
  });

  return (
    <>
      <ul className={styles.valuesList__container}>{entries}</ul>
    </>
  );
}

export { EntriesList };

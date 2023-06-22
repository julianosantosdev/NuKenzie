import styles from "./index.module.css";

function SumEntries({ total }) {
  return (
    <div className={styles.sumEntries__container}>
      <div className={styles.sumEntries__values}>
        <h3>Valor Total:</h3>
        <h3 className={styles.sumEntries__total}>{total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</h3>
      </div>
      <p>O valor refere-se ao saldo.</p>
    </div>
  );
}

export { SumEntries };

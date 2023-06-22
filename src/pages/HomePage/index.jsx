import { Header } from "../../components/Header";
import styles from "./index.module.css";
import { Form } from "./../../components/Form";
import { EntriesList } from "../../components/EntriesList";
import { SumEntries } from "../../components/SumEntries";
import noListImg from "./../../assets/img/noList.svg";

function HomePage({
  handleLogout,
  transaction,
  setTransaction,
  valuesList,
  setValuesList,
  addEntry,
  state,
  total,
}) {
  return (
    <>
      <Header handleLogout={handleLogout} />
      <main className={`${styles.AppContainer} container`}>
        <section className={styles.entryFields__container}>
          <div>
            <Form
              transaction={transaction}
              setTransaction={setTransaction}
              addEntry={addEntry}
              state={state}
            />
          </div>

          <>{valuesList.length > 0 ? <SumEntries total={total} /> : <></>}</>
        </section>

        <section className={styles.entries__container}>
          {valuesList.length > 0 ? (
            <div>
              <h3>Resumo Financeiro</h3>
              <EntriesList
                valuesList={valuesList}
                setValuesList={setValuesList}
              />
            </div>
          ) : (
            <>
              <h3>Resumo Financeiro</h3>
              <h2 className={styles.noCard__msg}>
                Você ainda não possui lançamento algum
              </h2>
              <img
                className={styles.noCard__img}
                src={noListImg}
                alt="noCard"
              />
              <img
                className={styles.noCard__img}
                src={noListImg}
                alt="noCard"
              />
              <img
                className={styles.noCard__img}
                src={noListImg}
                alt="noCard"
              />
            </>
          )}
        </section>
      </main>
    </>
  );
}
export { HomePage };
